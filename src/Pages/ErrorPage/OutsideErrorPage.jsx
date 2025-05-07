import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const OutsideErrorPage = () => {
    return (
        <div className=' flex flex-col justify-center items-center min-h-screen'>
            <Helmet><title>CurioBox||404 Page</title></Helmet>

          <div className=' relative'>
          <img className=' rounded-2xl' src="https://i.ibb.co.com/rYGxCbf/404-page-cover.jpg" alt="" />
          <Link className='btn absolute bottom-0 md:my-4 left-[40%] bg-blue-500 text-white wfull' to={'/'}>back to home</Link>
          </div>
        </div>
    );
};

export default OutsideErrorPage;