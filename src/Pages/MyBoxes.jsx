import React, { use } from "react";
import { Helmet } from "react-helmet-async";
import { ProductContext } from "../ProductProvider/ProductProvider";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router";
import { FaX } from "react-icons/fa6";

const MyBoxes = () => {
  const { feedback, selectedProduct,handleRemoveToCard } = use(ProductContext);
  // const { user } = use(AuthContext);
  // console.log(user);
  console.log(feedback);
  console.log(selectedProduct);

  return (
    <div className=" flex flex-col gap-6">
      <Helmet>
        <title>CurioBox||My-Booking page</title>
      </Helmet>
      {!selectedProduct.length >= 1 ? (
        <div className=" text-center space-y-5 mt-12">
          <h1 className=" text-3xl font-extrabold text-gray-900">
            No Boxes Found
          </h1>
          <p className=" text-xl font-semibold text-gray-500">
            {" "}
            Please added an any Box the Home Page
          </p>
        </div>
      ) : (
        <div className=" my-12 flex flex-col gap-8 ">
          {selectedProduct.map((product) => (
            <div
              key={product.id}
              className=" md:flex rounded-2xl bg-base-100 shadow-sm"
            >
              <figure className="  md:ml-0 mx-auto">
                <div className="avatar">
                  <div className="w-24 md:w-24 md:h-24 flex justify-center items-center bg-base-300 mx-auto ml-5 m-6 rounded">
                    <img className=" w-3/4" src={product.banner} />
                  </div>
                </div>
              </figure>

              <div className="card-body">
                <h2 className=" text-xl font-bold md:card-title ">{product.name}</h2>
                <p className=" text-sm font-normal">{product.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/box-details/${product.id}`}>
                    <button className="btn btn-primary">Show Details</button>
                  </Link>
                  <span onClick={()=>handleRemoveToCard(product.id)} className=" text-2xl text-end">
                    <FaX></FaX>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className=" flex justify-center items-center">
        <Link to={"/"}>
          <button className=" btn hover:btn-primary">Back to Home</button>
        </Link>
      </div>


   
    </div>
  );
};

export default MyBoxes;
