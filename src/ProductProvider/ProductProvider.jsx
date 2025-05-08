import React, { createContext, use } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
export const ProductContext = createContext(null);
const productPromise = fetch("/curious.json").then((res) => res.json());
const findUsPromise=fetch("/curioBoxInfo.json").then(res=>res.json())
const ProductProvider = ({ children }) => {
  const data = use(productPromise);
  const productData=data.boxes

  // Why Choose Curio Box and customer review
  const {curioBoxInfo}=use(findUsPromise);

  // Add to card Handling function
  const handleAddToCard=(product,customerReview)=>{
    if(!customerReview?.rating){
      Swal.fire({
        icon: "warning",
        title: "Please",
        text: "Submit your review and then Add to Card this Product Your Boxes .",
        confirmButtonText: "Okey",
      })
      return
    }
    console.log(product)
    console.log(customerReview)
    toast.success("You have Successfully added to My Boxes this Product")

  }
  return (
    <div>
      <ProductContext value={{productData,handleAddToCard,data,curioBoxInfo}}>{children}</ProductContext>
    </div>
  );
};

export default ProductProvider;
