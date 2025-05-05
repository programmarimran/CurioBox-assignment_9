import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { ProductContext } from "../../ProductProvider/ProductProvider";

const SwiperSlider = () => {
  const products=useContext(ProductContext)
  console.log(products)
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
{
  products.map(product=>(

    <SwiperSlide>
    <div className="hero rounded-2xl  w-full bg-gray-300 h-[400px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">
        <img
          src={product.banner}
          className=" w-full rounded-lg object-cover shadow-2xl"
        />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.slogan}</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </SwiperSlide>
  ))
}
      
    </Swiper>
  );
};

export default SwiperSlider;
