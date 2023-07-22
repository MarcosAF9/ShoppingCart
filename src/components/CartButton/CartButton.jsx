import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./cartButton.module.css";
import AppContext from "../../context/AppContext";

const CartButton = () => {
  const { setIsCartOpen, cartItems } = useContext(AppContext);

  return (
    <button
      type="button"
      className={styles.cartButton}
      onClick={() => setIsCartOpen((prev) => !prev)}
    >
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && (
        <span className={styles.cartStatus}>{cartItems.length}</span>
      )}
    </button>
  );
};

export default CartButton;
