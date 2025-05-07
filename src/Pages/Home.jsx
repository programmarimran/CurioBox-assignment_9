import React, { use } from "react";
import SwiperSlider from "../Components/HomeLayout/SwiperSlider";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import { ProductContext } from "../ProductProvider/ProductProvider";
import BoxCard from "../Components/BoxCard";

const Home = () => {
  const {data}=use(ProductContext)
  const productData=data.boxes
  console.log(data)
  return (
    <div>
      <Helmet>
        <title>CurioBox||Home Page</title>
      </Helmet>
      <header className="">
        <section  className=" rounded-2xl">
          <SwiperSlider></SwiperSlider>
        </section>
      </header>
      <main>
        <section className="my-24">
        <div className=" text-center w-3/4 mx-auto  mb-12 space-y-4">
          <h1 className=" text-2xl text-gray-800 font-bold">{data.sectionTitle
          }</h1>
          <p className=" text-sm text-gray-500 font-medium ">{data.sectionDescription}</p>
          </div>
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
         {
            productData.map(product=><BoxCard className={product.id==5?"order-1":''} key={product.id} product={product}></BoxCard>)
          }
         </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
