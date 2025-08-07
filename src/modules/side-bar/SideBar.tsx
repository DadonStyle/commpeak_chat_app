import { useState, useMemo } from "react";
import SearchBar from "../../components/search-bar/SearchBar";
import contactsJson from "../../api/contacts.json";
import type { ContactType } from "../../types/types";
import { useDebounce } from "../../hooks/useDebounce";

const SideBar = () => {
  const [allContacts] = useState<ContactType[]>(contactsJson);
  const [searchedText, setSearchedText] = useState<string>("");
  const debouncedSearchText = useDebounce(searchedText, 100);

  const filteredContacts = useMemo(() => {
    if (!debouncedSearchText.trim()) {
      return allContacts;
    }

    const searchLower = debouncedSearchText.toLowerCase();
    return allContacts.filter(
      (contact: ContactType) =>
        contact.first_name.toLowerCase().includes(searchLower) ||
        contact.last_name.toLowerCase().includes(searchLower) ||
        contact.phone.includes(debouncedSearchText)
    );
  }, [allContacts, debouncedSearchText]);

  return (
    <div>
      <SearchBar
        searchedText={searchedText}
        setSearchedText={setSearchedText}
      />
      <div>
        {filteredContacts.map((contact) => (
          <div key={contact.phone}>
            {contact.first_name} {contact.last_name} - {contact.phone}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
