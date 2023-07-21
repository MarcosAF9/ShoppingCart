import React, { useEffect, useState } from "react";
import fetchProducts from "../../api/fetchProducts";
import styles from "./products.module.css";
import ProductCard from "../ProductCard/ProductCard";
import formatCurrency from "../../utils/formatCurrency";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts("rtx3060ti").then((response) => {
      setProducts(response);
    });
  }, []);

  console.log(products);

  return (
    <section className={styles.products}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={formatCurrency(product.price, product.currency_id)}
          thumb={product.thumbnail}
        />
      ))}
    </section>
  );
};

export default Products;
