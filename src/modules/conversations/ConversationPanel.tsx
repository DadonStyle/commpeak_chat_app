import styles from "./ConversationPanel.module.css";
import ConversationHeader from "./conversationHeader/ConversationHeader";

interface ConversationPanelProps {}

const ConversationPanel = ({}: ConversationPanelProps) => {
  return (
    <div className={styles.panel}>
      <ConversationHeader />
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
