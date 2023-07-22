import React, { useState } from "react";
import AppContext from "./AppContext";

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
