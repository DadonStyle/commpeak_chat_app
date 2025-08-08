import Avatar from "../../../components/avatar/Avatar";
import type { ContactWithConversation } from "../../../types/types";
import styles from "./ConversationHeader.module.css";

interface ConversationHeaderProps {
  selectedContact: ContactWithConversation;
}

const ConversationHeader = ({ selectedContact }: ConversationHeaderProps) => {
  return (
    <div className={styles.header}>
      <Avatar
        firstName={selectedContact.first_name}
        lastName={selectedContact.last_name}
      />
      <div className={styles.contactName}>
        {`${selectedContact.first_name} ${selectedContact.last_name}`}
      </div>
    </div>
  );
};

export default ConversationHeader;
