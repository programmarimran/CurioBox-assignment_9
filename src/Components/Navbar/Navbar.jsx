import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { toast } from "react-toastify";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);
  const [state, setState] = useState(false);
  const handleHambarger = () => {
    setState(!state);
  };
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
  // console.log(state);
  return (
    <div className="navbar p-0">
      <div className="navbar-start gap-4">
        {/* <div className="dropdown">
     
            
            <button onClick={()=>handleHambarger()} type="button">
             <div tabIndex={0} className=" lg:hidden">
        {state ? <RxCross2  /> : <GiHamburgerMenu  size={24} />}
      </div>
      </button>
      
      
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div> */}
        <div className="dropdown">
          <button onClick={handleHambarger} type="button">
            <div tabIndex={0} className="lg:hidden">
              {state ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
            </div>
          </button>

          {state && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          )}
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

            <div className="tooltip tooltip-bottom  bg-gray-200">
              <div className="tooltip-content">
                <div
                  className={`animate-bounce text-orange-400 ${
                    user?.email.length < 15 ? "text-lg" : " text-xs"
                  } font-black`}
                >
                  {user ? user.email : ""}
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
          <>
            {loading ? (
              <span className="loading loading-dots loading-xl"></span>
            ) : (
              <FaCircleUser title={user?.email} size={40} />
            )}
          </>
        )}

        <button className="btn btn-primary">
          {user ? (
            <span
              onClick={() => {
                signOutUser(), toast.warning("Logout Successfully");
              }}
            >
              Logout
            </span>
          ) : (
            <Link to={"/auth"}>LogIn</Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
