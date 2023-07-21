import React, { useEffect, useState } from "react";
import fetchProducts from "../../api/fetchProducts";
import styles from "./products.module.css";
import ProductCard from "../ProductCard/ProductCard";
import formatCurrency from "../../utils/formatCurrency";
import Loading from "../Loading/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts("rtx3060ti").then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  console.log(products);

  return (
    (loading && <Loading />) || (
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
    )
  );
};

export default Products;
