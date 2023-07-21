import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./searchBar.module.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

const SearchBar = () => {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
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
