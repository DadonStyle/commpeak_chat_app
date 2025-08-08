// Regular imports
import { useState } from "react";
import leftArrowIcon from "../../../assets/left-arrow-icon.svg";

// Type imports
import type { KeyboardEvent } from "react";
import type { ContactWithConversation } from "../../../types/types";

// Styles
import styles from "./MessageInput.module.css";

interface MessageInputProps {
  selectedContact: ContactWithConversation;
  onSendMessage: (text: string) => void;
}

const MessageInput = ({
  selectedContact,
  onSendMessage,
}: MessageInputProps) => {
  const [messageText, setMessageText] = useState("");

  const placeholders = [
    {
      key: "first_name",
      label: "first_name",
      value: selectedContact.first_name,
    },
    { key: "last_name", label: "last_name", value: selectedContact.last_name },
    { key: "city", label: "city", value: selectedContact.city },
    { key: "phone", label: "phone", value: selectedContact.phone },
  ];

  const insertPlaceholder = (placeholder: string) => {
    const newText = messageText + `[${placeholder}]`;
    setMessageText(newText);
  };

  const replacePlaceholders = (text: string): string => {
    let replacedText = text;
    placeholders.forEach(({ key, value }) => {
      const regex = new RegExp(`\\[${key}\\]`, "g");
      replacedText = replacedText.replace(regex, value);
    });
    return replacedText;
  };

  const handleSend = () => {
    if (messageText.trim()) {
      const processedText = replacePlaceholders(messageText.trim());
      onSendMessage(processedText);
      setMessageText("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.messageInputRow}>
        <textarea
          className={styles.messageInput}
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Write something..."
        />
      </div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.placeholderButtons}>
          {placeholders.map((placeholder) => (
            <button
              key={placeholder.key}
              className={styles.placeholderButton}
              onClick={() => insertPlaceholder(placeholder.key)}
              type="button"
            >
              {placeholder.label}
            </button>
          ))}
        </div>
        <button
          className={styles.sendButton}
          onClick={handleSend}
          disabled={!messageText.trim()}
          type="button"
        >
          <img src={leftArrowIcon} alt="send" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
