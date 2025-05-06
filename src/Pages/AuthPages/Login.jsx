import React, { use, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Navigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  //  received context
  const { signInUser, resetPassword, heroemail,user,googleLogin } = use(AuthContext);
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
        navigate("/");
      })
      .catch((error) => {
        error && setError(error.code);
      });
  };
  // Forgot Password handleing start
  const refForgot = useRef();
  const handleForgotPassword = () => {
    const email = refForgot.current.value;
    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Check your email",
          text: "Click the link in your email to change your password",
          confirmButtonText: "Go to Gmail",
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
  // handle google login
  const handleGoogleLogin=()=>{
    googleLogin()
    .then((result)=>{
      console.log(result.user)
       toast.success(<span className=" flex">Your <span><FcGoogle size={24}/></span> Login Successfull!!</span>)
      navigate('/')
      return
    })
    .catch(error=>{
      setError(error.code)
    })
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl pt-4 mx-auto font-bold">{user?'Already Success!!':'Login now!'}</h1>
        <button onClick={handleGoogleLogin} className=" btn w-10/12 mx-auto mt-4">
          <FcGoogle size={25}></FcGoogle>Login with Google!
        </button>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset ">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              defaultValue={heroemail}
              name="email"
              ref={refForgot}
              className="input mx-auto"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input mx-auto"
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
