import React, { createContext, use } from "react";
const productPromise = fetch("/curious.json").then((res) => res.json());
export const ProductContext = createContext(null);
const ProductProvider = ({ children }) => {
  const data = use(productPromise);
  const productData=data.boxes

  // console.log(productData)
  return (
    <div>
      <ProductContext value={{productData,data}}>{children}</ProductContext>
    </div>
  );
};

export default ProductProvider;
