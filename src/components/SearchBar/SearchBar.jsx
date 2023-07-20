import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className={styles.searchBar}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className={styles.searchInput}
        onChange={(e) => setSearchValue(e.target.value)}
        required
      />
      <button type="submit" className={styles.searchButton}>
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
