import React, { use } from "react";
import { ProductContext } from "../../ProductProvider/ProductProvider";

const CustomerReviews = () => {
  const { curioBoxInfo } = use(ProductContext);
  const data = curioBoxInfo.customerReviews;
  const reviews = data.reviews;
  console.log(data);
  return (
    <div>
      <div className=" text-center w-3/4 mx-auto  mb-12 ">
        <h1 className=" text-2xl text-gray-800 font-bold">{data.title}</h1>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6">
        {reviews.map((item) => (
          <div key={item.id} className=" flex flex-col justify-between bg-linear-to-t from-[#f0f4ff] to-[#dbeafe] p-8  space-y-4 rounded-2xl">
            <p className=" text-lg font-medium">{item.comment}</p>
            <h1 className=" text-xl font-bold text-gray-900"> Locatoin: <span className=" text-lg font-semibold text-gray-600">{item. location}</span></h1>
            <div className=" flex items-center">
              <img className=" h-10 w-10 rounded-full border-2 border-blue-600" src={item.image} alt="" />
              <h3 className=" font-bold text-2xl">{item.name}</h3>
            </div>
            {[1, 2, 3, 4, 5].map((num) => console.log(num))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
