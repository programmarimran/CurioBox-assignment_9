import React from 'react';
import { Link } from 'react-router';

const OutsideErrorPage = () => {
    return (
        <div className=' flex flex-col justify-center items-center min-h-screen'>
            error 404 found <br />
            <Link className='btn btn-secondary' to={'/'}>back to home</Link>
        </div>
    );
};

export default OutsideErrorPage;