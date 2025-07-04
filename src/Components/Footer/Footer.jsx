import React, { use } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Footer = () => {
  const {user}=use(AuthContext)
   const links = (
     <>
       <li className=" my-1">
         <NavLink className=" link-hover" to={"/"}>
           Home
         </NavLink>
       </li>
       <li className=" my-1">
         {" "}
         <NavLink className=" link-hover" to={"/auth/myProfile"}>
           My Profile
         </NavLink>
       </li>
       {user ? (
         <>
           <li className=" my-1">
             {" "}
             <NavLink className=" link-hover" to={"/myboxes"}>
             My Boxes
             </NavLink>
           </li>
         </>
       ) : (
         ""
       )}
       <li className=" my-1">
         <NavLink className=" link-hover" to={"/about"}>
           About
         </NavLink>
       </li>
     </>
   );
  return (
    <footer className=" footer-horizontal  bg-gray-300 text-base-content rounded p-10">
      <h1 className=" text-2xl mb-8 text-gray-950 text-center font-extrabold">
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
            <Link className={" link-hover"} to={"/termsAndCondition"}>
              {" "}
              Terms and conditions
            </Link>
          </li>

          <li className=" font-medium">
            <Link className={" link-hover"} to={"/privacyPolicy"}>
              {" "}
              Privacy policy
            </Link>
          </li>
        </ul>
       </nav>
       <nav className=" mx-auto ">
           <h3 className=" font-bold text-xl mb-3 text-gray-700">Social:</h3>
        <ul className="flex gap-4 md:gap-3">
        <li>
          <Link to={'https://web.facebook.com/mdimran.hasan.79827803'} target="_blank">
            <FaFacebook className=" text-blue-500" size={30}></FaFacebook>
          </Link>
          </li>
         <li>
         <Link to={'https://www.youtube.com/@techmorebd1'} target="_blank">
            <FaYoutube className=" text-red-500" size={30}></FaYoutube>
          </Link>
         </li>
         <li>
         <Link to={'https://www.instagram.com/'} target="_blank">
            <FaInstagram className=" text-black" size={30}></FaInstagram>
          </Link>
         </li>
         <li>
         <Link to={'https://github.com/programmarimran'} target="_blank">
            <FaGithub className=" text-black" size={30}></FaGithub>
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
