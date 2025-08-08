import type { ContactWithConversation } from "../../types/types";
import styles from "./ConversationPanel.module.css";
import ConversationHeader from "./conversationHeader/ConversationHeader";

interface ConversationPanelProps {
  selectedContact: ContactWithConversation;
}

const ConversationPanel = ({ selectedContact }: ConversationPanelProps) => {
  return (
    <div className={styles.panel}>
      <ConversationHeader selectedContact={selectedContact} />
      <div className={styles.messagesArea}>
        <div>Messages Area</div>
      </div>
      <div className={styles.inputArea}>
        <div>Message Input</div>
      </div>
    </div>
  );
};

export default ConversationPanel;
