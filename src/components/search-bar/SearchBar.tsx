import styles from "./SearchBar.module.css";

interface SearchBarProps {
  searchedText: string;
  setSearchedText: (text: string) => void;
}

const SearchBar = ({ searchedText, setSearchedText }: SearchBarProps) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
        placeholder="Search conversations..."
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
