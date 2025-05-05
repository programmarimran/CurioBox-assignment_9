import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import SwiperSlider from "../Components/HomeLayout/SwiperSlider";

const Root = () => {
  return (
    <>
      <header className=" shadow-sm">
        <section className=" w-11/12 mx-auto">
          <Navbar></Navbar>
        </section>
      </header>
       <section className=" w-11/12 mx-auto">
       <SwiperSlider></SwiperSlider>
       </section>
      <main className=" w-11/12 mx-auto">
        <section className=" min-h-[calc(100vh-358.09px)]">
          <Outlet></Outlet>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Root;
