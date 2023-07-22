import React, { useContext } from "react";
import { BsFillCartDashFill } from "react-icons/bs";
import styles from "./cartItem.module.css";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

const CartItem = ({ thumbnail, title, price, id }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = (id) => {
    let newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  };

  return (
    <section className={styles.cartItem}>
      <img
        src={thumbnail}
        alt="imagem do produto"
        className={styles.cartItemImg}
      />

      <div className={styles.cartItemContent}>
        <h3 className={styles.cartItemTitle}>{title}</h3>
        <h3 className={styles.cartItemPrice}>{formatCurrency(price, "BRL")}</h3>
        <button
          type="button"
          className={styles.removeItemButton}
          onClick={() => handleRemoveItem(id)}
        >
          <BsFillCartDashFill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
