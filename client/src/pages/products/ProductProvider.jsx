import React, { createContext, useContext, useEffect, useState } from "react";
import { getProductsInCart } from "../../services/cartService";
import { errorMsg } from "../../services/feedbackService";

const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [cart, setCart] = useState([]);

  const isLogged = sessionStorage.getItem("token");

  useEffect(() => {
    if (isLogged) {
      getProductsInCart()
        .then((result) => {
          setCart(result.data);
        })
        .catch((err) => {
          errorMsg(`Oops. something went wrong... ${err}`);
        });
    }
  }, [isLogged]);

  return (
    <ProductContext.Provider value={{ cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
}
export const useProductService = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useUser must be used within a NameProvider");
  return context;
};
