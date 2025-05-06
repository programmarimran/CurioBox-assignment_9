import React, {  useContext, useEffect } from 'react';
import { Link } from 'react-router';
import { HomeContext } from '../../Layout/Root';

const ErrorPage = () => {
    const {setIsError}=useContext(HomeContext)
    useEffect(()=>{
        setIsError(true)

    return()=>{
        setIsError(false)
    }
        
    },[setIsError])
    return (
        <div className=' flex flex-col justify-center items-center min-h-screen'>
            error 404 found <br />
            <Link className='btn btn-secondary' to={'/'}>back to home</Link>
        </div>
    );
};

export default ErrorPage;