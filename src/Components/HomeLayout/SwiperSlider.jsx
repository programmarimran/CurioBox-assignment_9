import React, { use, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { ProductContext } from "../../ProductProvider/ProductProvider";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";
const SwiperSlider = () => {
  const navigate = useNavigate();
  const products = useContext(ProductContext);
  const {setHeroEmail}=use(AuthContext)
  // console.log(products);
  const handleSubscribe=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    setHeroEmail(email)
    navigate("/auth")
  }
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {products.map((product) => (
        <SwiperSlide>
          <div className="hero rounded-2xl bg-linear-to-t md:bg-linear-to-r from-[#D8BFD8] to-[#87CEFA] w-full bg-gray-300 md:h-[350px] h-[500px]">
            <div className="md:hero-content p-4   flex flex-col flex-col-reverse md:grid grid-cols-3 ">
              <div className=" col-span-2 flex flex-col justify-center items-center">
                <p className=" pt-4 md:pt-0">{product.name}</p>
                <h1 className=" md:w-4/6 mx-auto text-xl text-start md:text-3xl my-2 md:my-4 font-bold">
                  {product.slogan}
                </h1>
                <form onSubmit={handleSubscribe} className=" w-10/12 space-y-2 md:flex">
                  <input className=" w-full hover:border-2 border-gray-400 shadow-md hover:shadow-2xl input" name="email" type="email" placeholder="Enter your Email here..." />
                  <button type="submit" className=" btn btn-secondary">Subscribe Now!!</button>
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
