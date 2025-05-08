import React, { createContext, use, useState } from "react";
import { toast } from "react-toastify";
// import Swal from "sweetalert2";
export const ProductContext = createContext(null);
const productPromise = fetch("/curious.json").then((res) => res.json());
const findUsPromise=fetch("/curioBoxInfo.json").then(res=>res.json())
const ProductProvider = ({ children }) => {
  const data = use(productPromise);
  const productData=data.boxes

  // Why Choose Curio Box and customer review
  const {curioBoxInfo}=use(findUsPromise);

  // Add to card Handling function
  const [selectedProduct,setSelectedProduct]=useState([]);
  const [feedback,setFeedback]=useState({})
  const handleAddToCard=(product,customerReview)=>{
    
    setSelectedProduct([...selectedProduct,product])
    setFeedback(customerReview)
    toast.success("You have Successfully added to My Boxes this Product");
    

  }
  return (
    <div>
      <ProductContext value={{selectedProduct,feedback,productData,handleAddToCard,data,curioBoxInfo}}>{children}</ProductContext>
    </div>
  );
};

export default ProductProvider;
