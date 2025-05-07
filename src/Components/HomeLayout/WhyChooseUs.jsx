import React, { use } from "react";
import { ProductContext } from "../../ProductProvider/ProductProvider";

const WhyChooseUs = () => {
  const { curioBoxInfo } = use(ProductContext);
  const data = curioBoxInfo.whyChooseUs;
//   console.log(data);
  const features = data.features;
  return (
    <div>
      <div className=" text-center w-3/4 mx-auto  mb-12 space-y-4">
        <h1 className=" text-2xl text-gray-800 font-bold">{data.title}</h1>
        <p className=" text-sm text-gray-500 font-medium ">
          {data.description}
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6" >
      {features.map((item) => (
          <div key={item.id} className=" bg-linear-to-t from-[#f0f4ff] to-[#dbeafe] shadow-2xl p-8 text-center space-y-4 rounded-2xl">
            
            <p className=" text-7xl">{item?.icon&&item.icon}</p>
            <h1 className=" text-2xl text-gray-800">{item.title}</h1>
            <p className=" text-lg text-gray-500">{item.description}</p>
          </div>
        
      ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
