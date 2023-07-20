import React from "react";
import styles from "./header.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <SearchBar />
        <button>Cart</button>
      </div>
    </header>
  );
};

export default Header;
