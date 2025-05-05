import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">

    <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <h1 className="text-3xl mx-auto font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className=" text-sm">Do not have an Account? Please <Link className=" text-blue-500 underline" to={'/auth/register'}>Register</Link></p>
        </fieldset>
      </form>
    </div>
    </div>
  );
};

export default Login;
