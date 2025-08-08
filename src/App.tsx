import { useState, useMemo } from "react";
import styles from "./App.module.css";
import contacts from "./api/contacts.json";
import conversations from "./api/conversations.json";
import SideBar from "./modules/side-bar/SideBar";
import ConversationPanel from "./modules/conversations/ConversationPanel";
import type { ContactWithConversation, ConversationType, MessageType } from "./types/types";

const App = () => {
  // this is my global state, in a bigger project should be in state management lib or context.
  const [selectedContact, setSelectedContact] =
    useState<ContactWithConversation | null>(null);
  const [conversationData, setConversationData] = useState(conversations);

  const contactsWithConversations = useMemo(() => {
    return contacts.map((contact): ContactWithConversation => {
      const conversation = conversationData.find(
        (item: ConversationType) => item.phone === contact.phone
      );
      const messages = conversation?.messages || [];
      const lastMessage = messages[messages.length - 1];

      return {
        ...contact,
        lastMessage,
        messageCount: messages.length,
        messages,
      };
    });
  }, [conversationData]);

  const handleSendMessage = (messageText: string) => {
    if (!selectedContact) return;

    const newMessage: MessageType = {
      timestamp: new Date().toISOString(),
      sender: "me",
      text: messageText,
    };

    // Update conversation data
    setConversationData(prev => {
      const updatedConversations = prev.map(conv => {
        if (conv.phone === selectedContact.phone) {
          return {
            ...conv,
            messages: [...conv.messages, newMessage],
          };
        }
        return conv;
      });

      // If no conversation exists for this contact, create one
      const conversationExists = prev.some(conv => conv.phone === selectedContact.phone);
      if (!conversationExists) {
        updatedConversations.push({
          phone: selectedContact.phone,
          messages: [newMessage],
        });
      }

      return updatedConversations;
    });

    // Update selected contact to reflect the new message
    const updatedContact = contactsWithConversations.find(c => c.phone === selectedContact.phone);
    if (updatedContact) {
      const updatedMessages = [...updatedContact.messages, newMessage];
      setSelectedContact({
        ...updatedContact,
        messages: updatedMessages,
        lastMessage: newMessage,
        messageCount: updatedMessages.length,
      });
    }
  };

  return (
    <div className={styles.app}>
      <SideBar
        contacts={contactsWithConversations}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
      />
      {selectedContact ? (
        <ConversationPanel 
          selectedContact={selectedContact} 
          onSendMessage={handleSendMessage}
        />
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyText}>
            Select a conversation to start messaging
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
