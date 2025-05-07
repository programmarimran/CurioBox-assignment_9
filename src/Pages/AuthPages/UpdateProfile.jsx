import React, { use, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UpdateProfile = () => {
    const {updatedProfile,setUser,user}=use(AuthContext)
    // console.log(updatedProfile)
    const [error,setError]=useState("")
    const [name,setName]=useState(null)
    const [image,setImage]=useState(null)
    const handleUpdateProfile=(e)=>{
        e.preventDefault();
        const currentName=e.target.name.value;
        setName(currentName)
        const currentImage=e.target.image.value;
        setImage(currentImage)
        // console.log(name,image)
        updatedProfile(name,image)
        .then(result=>{
            console.log(result)
            
            setUser({...user,displayName:name,photoURL:image})
        })
        .catch(error=>{
            setError(error.code)
            console.log(error.code)
        })
        

    }
     return (
        <div className="min-h-screen flex justify-center items-center">
          <Helmet><title>CurioBox||Update Profile Page</title></Helmet>
          <div className="card mx-auto  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-xl pt-4 mx-auto font-bold">Update Your Profile ?</h1>
    
            <form onSubmit={handleUpdateProfile}  className="card-body">
              <fieldset className="fieldset ">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  
                  name="name" 
                  value={name}
                  className="input mx-auto"
                  placeholder="Enter Your Name..."
                />
                {/* Image URL */}
                <label className="label">Image URL</label>
                <input
                  type="text"
                  
                  name="image"
                  value={image}
                  className="input mx-auto"
                  placeholder="Enter Your Image URL..."
                />
                <p className=" text-error text-lg">{error&&error}</p>
    
                <button type="submit" className="btn btn-neutral mt-4">
                  Update now
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      );
};

export default UpdateProfile;