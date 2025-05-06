import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router';
// import { useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {
    // const navigate=useNavigate()
    const {user}=use(AuthContext)
    console.log(user)
    if(user&&user?.email){
        return children;
    }
    else{
        return <Navigate to={'/auth'}></Navigate>
    }
    
   
  
 
};

export default PrivateRoute;