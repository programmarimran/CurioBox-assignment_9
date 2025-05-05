import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { ProductContext } from "../../ProductProvider/ProductProvider";

const SwiperSlider = () => {
  const products = useContext(ProductContext);
  // console.log(products);
  const handleSubscribe=(e)=>{
    e.preventDefault()
  }
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {products.map((product) => (
        <SwiperSlide>
          <div className="hero rounded-2xl bg-linear-to-t md:bg-linear-to-r from-[#D8BFD8] to-[#87CEFA] w-full bg-gray-300 md:h-[350px] h-[450px]">
            <div className="md:hero-content p-4   flex flex-col flex-col-reverse md:grid grid-cols-3 ">
              <div className=" col-span-2 flex flex-col justify-center items-center">
                <p>{product.name}</p>
                <h1 className=" text-xl text-center md:text-3xl my-2 md:my-4 font-bold">
                  {product.slogan}
                </h1>
                <form onSubmit={handleSubscribe} className=" space-y-2 md:flex">
                  <input className=" input" type="text" placeholder=" Email" />
                  <button type="button" className=" btn btn-secondary">Subscribe</button>
                </form>
              </div>
              <div className=" col-span-1">
                <img
                  src={product.banner}
                  className="rounded-lg object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
