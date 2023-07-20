import React from "react";
import styles from "./header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import CartButton from "../CartButton/CartButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
