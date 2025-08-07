import { useState } from "react";
import styles from "./App.module.css";

import type { ContactType } from "./types/types";
import SearchBar from "./components/search-bar/SearchBar";
import SideBar from "./modules/side-bar/SideBar";

const App = () => {
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(
    null
  );

  return (
    <div className={styles.app}>
      <SideBar />
      <div>{selectedContact?.first_name}</div>
    </div>
  );
};

export default App;
