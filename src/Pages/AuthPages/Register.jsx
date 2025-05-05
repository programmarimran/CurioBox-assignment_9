import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <h1 className="text-3xl mx-auto font-bold">Register now!</h1>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Enter your name.." />
            {/* Image */}
            <label className="label">Image URL</label>
            <input type="text" className="input" placeholder="Enter your image URL.." />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className=" text-sm">
              Already you have an Account? Please{" "}
              <Link className=" text-blue-500 underline" to={"/auth"}>
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
