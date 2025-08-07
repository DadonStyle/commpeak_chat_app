import styles from "./ConversationHeader.module.css";

interface ConversationHeaderProps {}

const ConversationHeader = ({}: ConversationHeaderProps) => {
  return (
    <div className={styles.header}>
      <div>Conversation Header</div>
    </div>
  );
};

export default ConversationHeader;
