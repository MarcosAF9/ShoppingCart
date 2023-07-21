import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./searchBar.module.css";
import fetchProducts from "../../api/fetchProducts";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    const products = await fetchProducts(searchValue);
    console.log(products);
    setSearchValue("");
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
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
