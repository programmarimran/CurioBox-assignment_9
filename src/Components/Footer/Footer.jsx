import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  const links = (
    <>
      <li>
        <NavLink className=" link-hover" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className=" link-hover" to={"/allboxes"}>
          All Boxes
        </NavLink>
      </li>
      <li>
        <NavLink className=" link-hover" to={"/about"}>
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <footer className=" footer-horizontal  bg-gray-300 text-base-content rounded p-10">
      <h1 className=" text-2xl text-gray-950 text-center font-extrabold">
        CurioBox
      </h1>
      <aside className="md:grid grid-cols-3 justify-center items-start space-y-5">
        <nav className=" mx-auto ">
          <h3 className=" font-bold text-xl mb-3 text-gray-700">Quick Links:</h3>
          <ul className=" flex flex-col gap-1 md:gap-3">{links}</ul>
        </nav>
       <nav className=" mx-auto ">
       <ul className="">
          <li className=" font-medium">
            <Link className={" link-hover"} to={"#"}>
              {" "}
              Terms and conditions
            </Link>
          </li>

          <li className=" font-medium">
            <Link className={" link-hover"} to={"#"}>
              {" "}
              Privacy policy
            </Link>
          </li>
        </ul>
       </nav>
       <nav className=" mx-auto ">
           <h3 className=" font-bold text-xl mb-3 text-gray-700">Social:</h3>
        <ul className="flex flex-col gap-1 md:gap-3">
        <li>
          <Link>
            <FaFacebook className=" text-blue-500" size={30}></FaFacebook>
          </Link>
          </li>
         <li>
         <Link>
            <FaYoutube className=" text-red-500" size={30}></FaYoutube>
          </Link>
         </li>
         <li>
         <Link>
            <FaInstagram className=" text-black" size={30}></FaInstagram>
          </Link>
         </li>
        </ul>
      </nav>
      </aside>

      <aside className=" mt-5 text-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className=" font-bold"> CurioBox</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
