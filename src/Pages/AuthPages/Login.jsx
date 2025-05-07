import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Navigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  //  received context
  const { signInUser, setForgotEmail, heroemail, user, googleLogin } =
    use(AuthContext);
  // password Eye show state
  const [show, setShow] = useState(true);
  // error state
  const [error, setError] = useState("");

  //Password Error
  const [passwordError, setPasswordError] = useState("");

  // Login handleing start
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //  Password authentication start with regular expression
    const uppercaseRegex = /^(?=.*[A-Z]).{1,}$/;
    const lowercaseRegex = /^(?=.*[a-z]).{1,}$/;
    const passwordLength = /^.{6,}$/;
    if (!uppercaseRegex.test(password)) {
      setPasswordError("Please minimum 1 character Upercase");
      setError("");
      return;
    } else if (!lowercaseRegex.test(password)) {
      setPasswordError("Please minimum 1 character Lowercase");
      setError("");
      return;
    } else if (!passwordLength.test(password)) {
      setPasswordError("Please Your password minimum 6 character");
      setError("");
      return;
    } else {
      setPasswordError("");
    }
    // console.log(email,password)

    signInUser(email, password)
      .then((result) => {
        // console.log(result.user)
        result && toast.success("You successfully login!!");
        navigate(`${location?.state ? location.state : "/"}`);
        return;
      })
      .catch((error) => {
        error && setError(error.code);
      });
  };
  // Forgot Password handleing start
  const refForgot = useRef();
  const handleForgotPassword = () => {
    const email = refForgot.current.value;
    setForgotEmail(email);
  };
  // handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success(
          <span className=" flex">
            Your{" "}
            <span>
              <FcGoogle size={24} />
            </span>{" "}
            Login Successfull!!
          </span>
        );
        navigate(`${location?.state ? location.state : "/"}`);
        return;
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Helmet>
        <title>CurioBox||Login Page</title>
      </Helmet>
      <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl pt-4 mx-auto font-bold">
          {user ? "Already Success!!" : "Login now!"}
        </h1>
        <button
          onClick={handleGoogleLogin}
          className=" btn w-10/12 mx-auto mt-4"
        >
          <FcGoogle size={25}></FcGoogle>Login with Google!
        </button>
        <div className="flex mt-3 w-10/12 mx-auto items-center gap-4">
          <hr className="flex-grow border-t-4 border-gray-400" />
          <span className="text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-t-4 border-gray-400" />
        </div>
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
            <div className=" flex relative">
              <input
                type={show ? "password" : "text"}
                name="password"
                className="input mx-auto"
                placeholder="Password"
              />
              <button
                onClick={() => setShow(!show)}
                type="button"
                className=" absolute top-[16%] right-5"
              >
                {show ? (
                  <MdOutlineRemoveRedEye size={30} />
                ) : (
                  <IoMdEyeOff size={30} />
                )}
              </button>
            </div>
            <p className=" text-error">{passwordError && passwordError}</p>
            {/* forget password */}
            
            <div onClick={handleForgotPassword}>
              <Link to={"/auth/reset"} className="link link-hover">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            {error &&error==="auth/invalid-credential"?<p className=" text-error">Please Register your Email OR Valid Password </p>: <p className=" text-error text-sm">{error}</p>}
            <p className=" my-3 text-sm">
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
