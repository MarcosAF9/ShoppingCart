import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./cartButton.module.css";

const CartButton = () => {
  return (
    <button type="button" className={styles.cartButton}>
      <AiOutlineShoppingCart />
      <span className={styles.cartStatus}>1</span>
    </button>
  );
};

export default CartButton;
