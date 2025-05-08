import React, { use } from "react";
import { Helmet } from "react-helmet-async";
import { ProductContext } from "../ProductProvider/ProductProvider";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router";
const MyBoxes = () => {
  const { feedback, selectedProduct } = use(ProductContext);
  const { user } = use(AuthContext);
  console.log(user);
  console.log(feedback);
  console.log(selectedProduct);

  return (
    <div className=" flex flex-col gap-6">
      <Helmet>
        <title>CurioBox||My-Booking page</title>
      </Helmet>
      {
        selectedProduct.map(product=>(
          <div key={product.id} className=" md:flex card-side bg-base-100 shadow-sm">
          <figure className="  md:ml-0 mx-auto">
            <div className="avatar">
              <div className="w-48 h-48 md:w-24 md:h-24 flex justify-center items-center bg-base-300 mx-auto ml-5 m-6 rounded">
                <img className=" w-3/4" src={product.banner} />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <Link to={`/box-details/${product.id}`}><button className="btn btn-primary">Show Details</button></Link>
            </div>
          </div>
        </div>
        ))
      }
    
    </div>
  );
};

export default MyBoxes;
