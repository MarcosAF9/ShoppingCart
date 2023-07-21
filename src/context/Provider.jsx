import React, { useState } from "react";
import AppContext from "./AppContext";

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <AppContext.Provider value={{ products, setProducts, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
