import React, { useContext, useState } from "react";
import styles from "./cart.module.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

const Cart = () => {
  const { cartItems, isCartOpen } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`${styles.cart} ${isCartOpen && styles.cartActive}`}>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.cartResume}>
        {formatCurrency(totalPrice, "BRL")}
      </div>
    </section>
  );
};

export default Cart;
