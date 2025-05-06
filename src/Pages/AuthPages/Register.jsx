import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const navigate = useNavigate();
  // received context
  const { createUser, updatedProfile,signOutUser, heroemail, googleLogin } =
    use(AuthContext);
    // Eye password state 
    const [show,setShow]=useState(true)
  // error state
  const [error, setError] = useState("");
  // handle create user register handleing
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name,image,email,password)

    createUser(email, password)
      .then((result) => {
        //updated profile start
        updatedProfile(name, image)
          .then((res) => {
            res && "";
          })
          .catch((error) => {
            setError(error.code);
          });
        // updated profile ended
        result && toast.success("You successfully registared !!");
        signOutUser()
        navigate("/auth")
        return
      })
      .catch((error) => {
        error && setError(error.code);
      });
  };
  // Handle Google login 
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
        navigate("/");
        return;
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-3xl mx-auto font-bold">Register now!</h1>
          <fieldset className="fieldset w-11/12 mx-auto">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name.."
            />
            {/* Image */}
            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              className="input"
              placeholder="Enter your image URL.."
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              defaultValue={heroemail}
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <div className=" flex relative">
              <input
                type={show?"password":"text"}
                name="password"
                className="input"
                placeholder="Password"
              />
              <button onClick={()=>setShow(!show)} type="button" className=" absolute top-[16%] right-5">{show?<MdOutlineRemoveRedEye size={30} />:<IoMdEyeOff size={30}/>}</button>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            {error && <p className="text-error text-sm">{error}</p>}
            <p className=" text-md">
              Already you have an Account? Please{" "}
              <Link className=" text-blue-500 underline" to={"/auth"}>
                Login
              </Link>
            </p>
            <button
              onClick={handleGoogleLogin}
              type="button"
              className=" btn w-full mx-auto mt-4"
            >
              <FcGoogle size={25}></FcGoogle>Login with Google!
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
