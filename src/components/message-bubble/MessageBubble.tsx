// Type imports
import type { MessageType } from "../../types/types";

// Styles
import styles from "./MessageBubble.module.css";

interface MessageBubbleProps {
  message: MessageType;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isOutgoing = message.sender === "me";
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return `Sent: ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })}`;
  };

  return (
    <div
      className={`${styles.messageContainer} ${
        isOutgoing ? styles.outgoing : styles.incoming
      }`}
    >
      <div
        className={`${styles.messageBubble} ${
          isOutgoing ? styles.outgoingBubble : styles.incomingBubble
        }`}
      >
        <div className={styles.messageText}>{message.text}</div>
        <div className={styles.messageTime}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
