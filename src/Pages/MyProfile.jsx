import React, { use, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaCircleUser } from "react-icons/fa6";

const MyProfile = () => {
  const { updatedProfile, setUser, user,loading } = use(AuthContext);
  // console.log(updatedProfile)
  
//   console.log(user)
  const [error, setError] = useState("");
  

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    const image = e.target.image.value;

    // console.log(name,image)
    updatedProfile(name, image)
      .then((result) => {
        result&&""
        // console.log(result);

        setUser({ ...user, displayName: name, photoURL: image });
      })
      .catch((error) => {
        setError(error.code);
        // console.log(error.code);
      });
  };
  return (
    <div>
      <Helmet>
        <title>CurioBox||Update My Profile Page</title>
      </Helmet>
      <div className=" mt-12 mb-24 bg-gradient-to-br from-[#f0f4ff] to-[#dbeafe] shadow rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image */}
        <div className="avatar">
          <div className=" w-full rounded">
            {loading&&<span className=" loading bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 loading-spinner w-24"></span> }
            
            {
                user&&user.photoURL?<img src={user?.photoURL} alt={`${user?.displayName}`}/>:<FaCircleUser className=" flex justify-center items-center min-h-11/12 mx-auto" title={user?.email} size={300} />
            }
        
          </div>
        </div>

        {/* Info */}
        <div className="w-full  rounded-2xl bg-amber-50 p-4 space-y-4">
          <div className="mx-auto w-11/12 pt-4">
          <h1 className=" text-2xl font-extrabold text-gray-950">Name:</h1>
          <h2 className="text-xl font-bold text-gray-500">{user?.displayName}{loading&&<span className="loading loading-dots loading-xl"></span>}</h2>
          <h1 className=" text-2xl font-extrabold text-gray-950">Email:</h1>
          <p className="text-xl break-words text-gray-500">{user?.email}{loading&&<span className="loading loading-dots loading-xl"></span>}</p>
          </div>
          {/* ************************************** */}
          <hr className=" border-2 border-dashed border-gray-600 mx-auto w-11/12 "/>

          <div className=" flex justify-center items-center">
            <div className="card mx-auto   w-full  shrink-0 ">
              <h1 className="text-xl pt-4 mx-auto font-bold">
                Update Your Profile ?
              </h1>

              <form onSubmit={handleUpdateProfile} className="card-body">
                <fieldset className="fieldset ">
                  {/* Name */}
                  <label className="label text-lg">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full mx-auto"
                    placeholder="Enter Your Name..."
                  />
                  {/* Image URL */}
                  <label className="label text-lg">Image URL</label>
                  <input
                    type="text"
                    name="image"
                    className="input w-full mx-auto"
                    placeholder="Enter Your Image URL..."
                  />
                  <p className=" text-error text-lg">{error && error}</p>

                  <button type="submit" className="btn btn-neutral mt-4">
                    Update now
                  </button>
                </fieldset>
              </form>
            </div>
          </div>

          {/* **************************************** */}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
