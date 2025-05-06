import React, { createContext, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
export const HomeContext = createContext(null);
const Root = () => {
  const [isError, setIsError] = useState(false);
  return (
    <div className="bg-base-200">
      <div className=" pb-6">
        <header className=" shadow-sm">
          <section className=" w-11/12 mx-auto">
          {
        !isError?
        <Navbar></Navbar>
      :""
      }
          </section>
        </header>
      </div>
      <HomeContext value={{setIsError}}>
        <main className=" w-11/12 mx-auto">
          <section className=" min-h-[calc(100vh-358.09px)]">
            <Outlet></Outlet>
          </section>
        </main>
      </HomeContext>
      {
        !isError?<footer className=" mt-6">
        <Footer></Footer>
      </footer>:""
      }
      
    </div>
  );
};

export default Root;
