import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [state, setState] = useState(false);
  const handleHambarger = () => {
    setState(!state);
  };
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
      {user ? (
        <NavLink className=" link-hover" to={"/auth/updateProfile"}>
          Update Profile
        </NavLink>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start gap-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <div onClick={handleHambarger}>
              {state ? <RxCross2 /> : <GiHamburgerMenu size={24} />}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-xl font-bold">
          CurioBox
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-4 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user?.photoURL ? (
          <>
            {/* ************ */}
            <div className="tooltip tooltip-bottom bg-gray-200">
              <div className="tooltip-content">
                <div className="animate-bounce text-orange-400  text-2xl font-black ">
                 {user?user.email:''}
                </div>
              </div>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                  <img src={user?.photoURL} alt="User" />
                </div>
              </div>
            </div>
            {/* **************** */}
          </>
        ) : (
          <FaCircleUser title={user?.email} size={40} />
        )}

        <Link to={"/auth"} className="btn btn-primary">
          {user ? (
            <span onClick={() => signOutUser()}>Logout</span>
          ) : (
            <span>LogIn</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
