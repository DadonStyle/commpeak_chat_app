// Regular imports
import ConversationHeader from "./conversationHeader/ConversationHeader";
import MessagesArea from "./messages-area/MessagesArea";
import MessageInput from "./message-input/MessageInput";

// Type imports
import type { ContactWithConversation } from "../../types/types";

// Styles
import styles from "./ConversationPanel.module.css";

interface ConversationPanelProps {
  selectedContact: ContactWithConversation;
  onSendMessage: (text: string) => void;
}

const ConversationPanel = ({
  selectedContact,
  onSendMessage,
}: ConversationPanelProps) => {
  return (
    <div className={styles.panel}>
      <ConversationHeader selectedContact={selectedContact} />
      <MessagesArea messages={selectedContact.messages} />
      <MessageInput
        selectedContact={selectedContact}
        onSendMessage={onSendMessage}
      />
    </div>
  );
};

export default ConversationPanel;
