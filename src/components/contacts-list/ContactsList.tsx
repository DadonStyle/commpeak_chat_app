// Regular imports
import Avatar from "../avatar/Avatar";

// Type imports
import type { ContactWithConversation } from "../../types/types";

// Styles
import styles from "./ContactsList.module.css";

interface ContactsListProps {
  contacts: ContactWithConversation[];
  selectedContact: ContactWithConversation | null;
  handleContactClick: (contact: ContactWithConversation) => void;
}

const ContactsList = ({
  contacts,
  selectedContact,
  handleContactClick,
}: ContactsListProps) => {
  const formatTimestamp = (timestamp?: string) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className={styles.contactsList}>
      {contacts.map((contact) => (
        <div
          key={contact.phone}
          className={`${styles.contactItem} ${
            selectedContact?.phone === contact.phone ? styles.active : ""
          }`}
          onClick={() => handleContactClick(contact)}
        >
          <Avatar firstName={contact.first_name} lastName={contact.last_name} />
          <div className={styles.contactInfo}>
            <div className={styles.contactName}>
              {contact.first_name} {contact.last_name}
            </div>
            <div className={styles.lastMessage}>
              {contact.lastMessage?.text || "No messages"}
            </div>
          </div>
          <div className={styles.timestamp}>
            {formatTimestamp(contact.lastMessage?.timestamp)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
