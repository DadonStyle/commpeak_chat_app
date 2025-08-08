// Regular imports
import { useState, useMemo } from "react";
import SearchBar from "../../components/search-bar/SearchBar";
import { useDebounce } from "../../hooks/useDebounce";
import ContactsList from "../../components/contacts-list/ContactsList";

// Type imports
import type { ContactWithConversation } from "../../types/types";

// Styles
import styles from "./SideBar.module.css";

interface SideBarProps {
  contacts: ContactWithConversation[];
  selectedContact: ContactWithConversation | null;
  setSelectedContact: (contact: ContactWithConversation | null) => void;
}

const SideBar = ({
  contacts,
  selectedContact,
  setSelectedContact,
}: SideBarProps) => {
  const [searchedText, setSearchedText] = useState<string>("");
  const debouncedSearchText = useDebounce(searchedText, 200);

  const handleContactClick = (contact: ContactWithConversation) =>
    setSelectedContact(contact);

  const handleSearchTextChange = (text: string) => {
    setSearchedText(text);
    if (text.trim()) {
      setSelectedContact(null);
    }
  };

  const filteredContacts = useMemo(() => {
    if (!debouncedSearchText.trim()) {
      return contacts;
    }

    const searchLower = debouncedSearchText.toLowerCase();
    return contacts.filter(
      (contact: ContactWithConversation) =>
        contact.first_name.toLowerCase().includes(searchLower) ||
        contact.last_name.toLowerCase().includes(searchLower) ||
        contact.phone.includes(debouncedSearchText)
    );
  }, [contacts, debouncedSearchText]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.searchWrapper}>
        <SearchBar
          searchedText={searchedText}
          setSearchedText={handleSearchTextChange}
        />
      </div>
      <div className={styles.totalConversations}>
        {`${filteredContacts.length} Conversations`}
      </div>
      <aside>
        <ContactsList
          contacts={filteredContacts}
          selectedContact={selectedContact}
          handleContactClick={handleContactClick}
        />
      </aside>
    </div>
  );
};

export default SideBar;
