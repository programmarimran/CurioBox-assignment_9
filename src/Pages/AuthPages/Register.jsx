import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  // received context
  const {createUser,updatedProfile}=use(AuthContext)
  // error state
  const [error,setError]=useState("")
  const handleRegister=(e)=>{
    e.preventDefault()
    const name=e.target.name.value;
    const image=e.target.image.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    // console.log(name,image,email,password)

    createUser(email,password)
    .then(result=>{
      //updated profile start
      updatedProfile(name,image)
      .then(res=>{
        res&&''
      })
      .catch(error=>{
        setError(error.code)
      })
      // updated profile ended
      result&& toast.success("You successfully registared !!")
    })
    .catch(error=>{
     error&&setError(error.code)
    })

  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-3xl mx-auto font-bold">Register now!</h1>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Enter your name.." />
            {/* Image */}
            <label className="label">Image URL</label>
            <input type="text" name="image" className="input" placeholder="Enter your image URL.." />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />

            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            {
              error&&<p className="text-error text-sm">{error}</p>
            }
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
