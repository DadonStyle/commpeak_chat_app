import styles from "./MessagesArea.module.css";
import MessageBubble from "../../../components/message-bubble/MessageBubble";
import useScrollBottom from "../../../hooks/useScrollBottom";
import DateSeparator from "../../../components/date-separator/DateSeparator";
import type { MessageType } from "../../../types/types";

interface MessagesAreaProps {
  messages: MessageType[];
}

const MessagesArea = ({ messages }: MessagesAreaProps) => {
  const messagesEndRef = useScrollBottom(messages);

  const groupMessagesByDate = (messages: MessageType[]) => {
    const grouped: { date: string; messages: MessageType[] }[] = [];

    messages.forEach((message) => {
      const messageDate = new Date(message.timestamp).toDateString();
      const lastGroup = grouped[grouped.length - 1];

      if (lastGroup && lastGroup.date === messageDate) {
        lastGroup.messages.push(message);
      } else {
        grouped.push({
          date: messageDate,
          messages: [message],
        });
      }
    });

    return grouped;
  };

  const messageGroups = groupMessagesByDate(messages);

  if (messages.length === 0) {
    return (
      <div className={styles.messagesArea}>
        <div className={styles.emptyState}>
          <div className={styles.emptyText}>
            No messages yet. Start the conversation!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.messagesArea}>
      <div className={styles.messagesContent}>
        {messageGroups.map((group) => (
          <div key={group.date}>
            <DateSeparator formattedDate={group.date} />
            {group.messages.map((message, messageIndex) => (
              <MessageBubble
                key={`${group.date}-${messageIndex}`}
                message={message}
              />
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessagesArea;
