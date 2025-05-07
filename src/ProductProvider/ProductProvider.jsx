import React, { createContext, use } from "react";
export const ProductContext = createContext(null);
const productPromise = fetch("/curious.json").then((res) => res.json());
const findUsPromise=fetch("/curioBoxInfo.json").then(res=>res.json())
const ProductProvider = ({ children }) => {
  const data = use(productPromise);
  const productData=data.boxes

  // Why Choose Curio Box and customer review
  const {curioBoxInfo}=use(findUsPromise);

  // console.log(productData)
  return (
    <div>
      <ProductContext value={{productData,data,curioBoxInfo}}>{children}</ProductContext>
    </div>
  );
};

export default ProductProvider;
