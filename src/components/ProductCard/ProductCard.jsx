import React, { useContext } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import styles from "./productCard.module.css";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

const ProductCard = ({ title, price, thumbnail, id }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = (title, price, thumbnail) => {
    let updatedCartItems = {
      id,
      title,
      price,
      thumbnail,
    };
    setCartItems([...cartItems, updatedCartItems]);
  };

  return (
    <section className={styles.productCard}>
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="produto"
        className={styles.cardImage}
      />

      <div className={styles.cardInfos}>
        <h2 className={styles.cardPrice}>{formatCurrency(price, "BRL")}</h2>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>

      <button
        type="button"
        className={styles.addCartButton}
        onClick={() => handleAddCart(title, price, thumbnail)}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};

export default ProductCard;
