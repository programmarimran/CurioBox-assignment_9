import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  const links = (
    <>
      <NavLink className=" link-hover" to={"/"}>
        Home
      </NavLink>
      <NavLink className=" link-hover" to={"/allboxes"}>
        All Boxes
      </NavLink>
      <NavLink className=" link-hover" to={"/about"}>
        About
      </NavLink>
    </>
  );
  return (
    <footer className="footer footer-horizontal footer-center bg-gray-50 text-base-content rounded p-10">
      <h1 className=" text-2xl text-base font-bold">CurioBox</h1>
      <nav className="grid grid-flow-col gap-4">{links}</nav>
      <nav>
        <div className="grid grid-flow-col gap-6">
          <Link>
            <FaFacebook className=" text-blue-500" size={30}></FaFacebook>
          </Link>
          <Link>
            <FaYoutube className=" text-red-500" size={30}></FaYoutube>
          </Link>
          <Link>
            <FaInstagram className=" text-black" size={30}></FaInstagram>
          </Link>
        </div>
      </nav>
      <aside className=" md:flex">
        <Link className={" link-hover"} to={"#"}>
          {" "}
          Terms and conditions
        </Link>
        <span>,</span>
        <Link className={" link-hover"} to={"#"}>
          {" "}
          Privacy policy
        </Link>
      </aside>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className=" font-bold"> CurioBox</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
