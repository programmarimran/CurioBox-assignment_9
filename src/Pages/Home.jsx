import React, { use } from "react";
import SwiperSlider from "../Components/HomeLayout/SwiperSlider";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import { ProductContext } from "../ProductProvider/ProductProvider";
import BoxCard from "../Components/BoxCard";

const Home = () => {
  const products=use(ProductContext)
  console.log(products)
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
       <section className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 my-24">
       {
          products.map(product=><BoxCard key={product.id} product={product}></BoxCard>)
        }
       </section>
      </main>
    </div>
  );
};

export default Home;
