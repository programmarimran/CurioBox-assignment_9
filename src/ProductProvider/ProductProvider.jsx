import React, { createContext, use } from "react";
const productPromise = fetch("/curious.json").then((res) => res.json());
export const ProductContext = createContext(null);
const ProductProvider = ({ children }) => {
  const productData = use(productPromise);

  // console.log(productData)
  return (
    <div>
      <ProductContext value={productData}>{children}</ProductContext>
    </div>
  );
};

export default ProductProvider;
