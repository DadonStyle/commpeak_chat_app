import styles from "./SearchBar.module.css";
import searchIconSvg from "../../assets/search-icon.svg";

interface SearchBarProps {
  searchedText: string;
  setSearchedText: (text: string) => void;
}

const SearchBar = ({ searchedText, setSearchedText }: SearchBarProps) => {
  return (
    <div className={styles.searchContainer}>
      <img src={searchIconSvg} alt="Search" className={styles.searchIcon} />
      <input
        type="text"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
        placeholder="Search"
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
