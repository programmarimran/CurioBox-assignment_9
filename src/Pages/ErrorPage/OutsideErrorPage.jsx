import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const OutsideErrorPage = () => {
    return (
        <div className=' flex flex-col justify-center items-center min-h-screen'>
            <Helmet><title>CurioBox||404 Page</title></Helmet>
            error 404 found <br />
            <Link className='btn btn-secondary' to={'/'}>back to home</Link>
        </div>
    );
};

export default OutsideErrorPage;