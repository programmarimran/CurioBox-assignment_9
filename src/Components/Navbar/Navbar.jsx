import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const {email}=use(AuthContext)
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
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-xl">
          CurioBox
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-4 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img title={email} src="https://i.ibb.co.com/fzm4RWdy/IMG-20210810-221115.jpg" />
          </div>
        </div>
        <Link to={'/auth'} className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
