import React, { use } from "react";
import { ProductContext } from "../../ProductProvider/ProductProvider";

const CustomerReviews = () => {
  const { curioBoxInfo } = use(ProductContext);
  const data = curioBoxInfo.customerReviews;
  const reviews = data.reviews;
  // console.log(data);
  return (
    <div>
      <div className=" text-center w-3/4 mx-auto  mb-12 ">
        <h1 className=" text-2xl text-gray-800 font-bold">{data.title}</h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
        {reviews.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col justify-between bg-gradient-to-tl from-[#f0f4ff] to-[#dbeafe] shadow-2xl p-8  space-y-4 rounded-2xl"
          >
            <p className=" text-lg font-medium first-letter:text-3xl first-letter:font-bold first-letter:text-secondary first-letter:uppercase">
              {item.comment}
            </p>
            <h1 className=" text-xl font-bold text-gray-900">
              {" "}
              Locatoin:{" "}
              <span className=" text-lg font-semibold text-gray-600">
                {item.location}
              </span>
            </h1>
            <div className=" flex">
              <span className=" text-gray-500">Rating:</span>
              {[1, 2, 3, 4, 5].map((num, i) =>
                num <= item.rating ? (
                  <p key={i} className="">
                    ⭐
                  </p>
                ) : (
                  <p key={i} className="">
                    ☆{" "}
                  </p>
                )
              )}
            </div>
            <hr className=" border-2 border-dashed border-gray-500" />
            <div className=" flex items-center">
              <img
                className=" h-10 w-10 rounded-full border-2 border-blue-600"
                src={item.image}
                alt=""
              />
              <h3 className=" font-bold text-2xl">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
