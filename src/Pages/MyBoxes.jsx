import React, { use } from "react";
import { Helmet } from "react-helmet-async";
import { ProductContext } from "../ProductProvider/ProductProvider";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router";
import { FaX } from "react-icons/fa6";

const MyBoxes = () => {
  const { feedback, selectedProduct, handleRemoveToCard } = use(ProductContext);
  // const { user } = use(AuthContext);
  // console.log(user);
  // console.log(feedback);
  // console.log(selectedProduct);

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
                  <div className=" w-44 h-full flex justify-center items-center bg-base-300 mx-auto ml-5 m-6 rounded">
                    <img className="" src={product.banner} />
                  </div>
                </div>
              </figure>

              <div className="card-body">
               <div className=" flex justify-between">
               <h2 className=" text-2xl font-extrabold  ">
                  {product.name}
                </h2>
                <span
                    onClick={() => handleRemoveToCard(product.id)}
                    className=" text-2xl text-end btn"
                  >
                    <FaX></FaX>
                  </span>
                {/*  */}
               </div>
                <p className=" text-lg font-normal">{product.description}</p>
                <hr  className=" border-2 my-2 border-dashed border-gray-400"/>
                <div className=" space-y-4">
                  <p className=" text-xl font-black">
                    Your rating type:{" "}
                    <span className=" text-green-600 bg-green-100 p-1 border border-green-300 rounded-lg">
                      {" "}
                      {feedback.comment}
                    </span>
                  </p>

                  {/* ***************** */}
                <div className=" md:flex justify-between">
                <div className=" font-extrabold text-2xl flex">
                 <span className="">Rating:</span>
                  <span className=" flex">
                    {" "}
                    {[1, 2, 3, 4, 5].map((num, i) =>
                      num <= feedback.rating ? (
                        <p key={i} className="">
                          ⭐
                        </p>
                      ) : (
                        <p key={i} className="">
                          ☆{" "}
                        </p>
                      )
                    )}
                  </span>
                 </div>
                 <hr  className=" border-2 my-2 border-dashed border-gray-400"/>
                 <Link to={`/box-details/${product.id}`}>
                    <button className="btn btn-primary">Show Details</button>
                  </Link>

                </div>
                  {/* ****************** */}
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
