import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import styles from "./productCard.module.css";

const ProductCard = ({ title, price, thumb }) => {
  return (
    <section className={styles.productCard}>
      <img
        src={thumb.replace(/\w\.jpg/gi, "W.jpg")}
        alt="produto"
        className={styles.cardImage}
      />

      <div className={styles.cardInfos}>
        <h2 className={styles.cardPrice}>{price}</h2>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>

      <button type="button" className={styles.addCartButton}>
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};

export default ProductCard;
