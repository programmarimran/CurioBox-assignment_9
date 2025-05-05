import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const {createUser}=use(AuthContext)
  const handleRegister=(e)=>{
    e.preventDefault()
    const name=e.target.name.value;
    const image=e.target.image.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(name,image,email,password)

    createUser(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error)
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
