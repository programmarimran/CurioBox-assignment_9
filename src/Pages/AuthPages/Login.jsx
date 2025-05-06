import React, { use, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Navigate } from "react-router";

const Login = () => {
  const navigate=useNavigate()
  //  received context
  const { signInUser, resetPassword,heroemail } = use(AuthContext);
  // error state
  const [error, setError] = useState("");
  // console.log(error);
  // Login handleing start
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password)

    signInUser(email, password)
      .then((result) => {
        // console.log(result.user)
        result && toast.success("You successfully login!!");
        navigate("/")
      })
      .catch((error) => {
        error && setError(error.code);
      });
  };
  
    const refForgot = useRef();


  
    const handleForgotPassword = () => {
      const email = refForgot.current.value;
    
    
      resetPassword(email)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Check your email",
            text: "Click the link in your email to change your password",
            confirmButtonText: "Go to Gmail"
          }).then((result) => {
            if (result.isConfirmed) {
              window.open("https://mail.google.com", "_blank");
            }
          });
        })
        .catch((error) => {
          setError(error.code);
        });
    };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-3xl mx-auto font-bold">Login now!</h1>
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email" 
              defaultValue={heroemail}
              name="email"
              ref={refForgot}
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            {/* forget password */}
            {error && <p className=" text-error text-sm">{error}</p>}

            <div onClick={handleForgotPassword}>
              <Link className="link link-hover">Forgot password?</Link>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className=" text-sm">
              Do not have an Account? Please{" "}
              <Link className=" text-blue-500 underline" to={"/auth/register"}>
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
