// Regular imports
import { useMemo } from "react";
import MessageBubble from "../../../components/message-bubble/MessageBubble";
import useScrollBottom from "../../../hooks/useScrollBottom";
import DateSeparator from "../../../components/date-separator/DateSeparator";

// Type imports
import type { MessageType } from "../../../types/types";

// Styles
import styles from "./MessagesArea.module.css";

interface MessagesAreaProps {
  messages: MessageType[];
}

const MessagesArea = ({ messages }: MessagesAreaProps) => {
  const messagesEndRef = useScrollBottom(messages);

  const shouldShowDateSeparator = (
    currentMessage: MessageType,
    previousMessage?: MessageType
  ): boolean => {
    if (!previousMessage) return true;

    const currentDate = new Date(currentMessage.timestamp).toDateString();
    const previousDate = new Date(previousMessage.timestamp).toDateString();

    return currentDate !== previousDate;
  };

  const memoizedMessages = useMemo(() => messages, [messages]);

  if (memoizedMessages.length === 0) {
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
        {memoizedMessages.map((message, index) => {
          const previousMessage =
            index > 0 ? memoizedMessages[index - 1] : undefined;
          const showSeparator = shouldShowDateSeparator(
            message,
            previousMessage
          );

          return (
            <div key={`message-group-${index}`}>
              {showSeparator && (
                <DateSeparator
                  formattedDate={new Date(message.timestamp).toDateString()}
                />
              )}
              <MessageBubble message={message} />
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessagesArea;
