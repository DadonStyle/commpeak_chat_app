import { useState, useMemo } from "react";
import styles from "./App.module.css";
import contacts from "./api/contacts.json";
import conversations from "./api/conversations.json";
import SideBar from "./modules/side-bar/SideBar";
import ConversationPanel from "./modules/conversations/ConversationPanel";
import type { ContactWithConversation, ConversationType } from "./types/types";

const App = () => {
  // this is my global state, in a bigger project should be in state management lib or context.
  const [selectedContact, setSelectedContact] =
    useState<ContactWithConversation | null>(null);

  const contactsWithConversations = useMemo(() => {
    return contacts.map((contact): ContactWithConversation => {
      const conversation = conversations.find(
        (item: ConversationType) => item.phone === contact.phone
      );
      const messages = conversation?.messages || [];
      const lastMessage = messages[messages.length - 1];

      return {
        ...contact,
        lastMessage,
        messageCount: messages.length,
      };
    });
  }, [contacts]);

  return (
    <div className={styles.app}>
      <SideBar
        contacts={contactsWithConversations}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
      />
      <div className={styles.mainPanel}>
        {selectedContact ? (
          <ConversationPanel selectedContact={selectedContact} />
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyText}>
              Select a conversation to start messaging
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
