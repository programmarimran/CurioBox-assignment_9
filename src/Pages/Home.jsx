import React from "react";
import SwiperSlider from "../Components/HomeLayout/SwiperSlider";

const Home = () => {
  return (
    <div>
      <header className=" w-11/12 mx-auto">
        <section  className=" rounded-2xl">
          <SwiperSlider></SwiperSlider>
        </section>
      </header>
      <main></main>
    </div>
  );
};

export default Home;
