import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

interface SearchBarProps {
  searchedText: string;
  setSearchedText: (text: string) => void;
}

const SearchBar = ({ searchedText, setSearchedText }: SearchBarProps) => {
  const debouncedSearchText = useDebounce(searchedText, 300);

  return (
    <div>
      <input
        type="text"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
        placeholder=""
      />
    </div>
  );
};

export default SearchBar;
