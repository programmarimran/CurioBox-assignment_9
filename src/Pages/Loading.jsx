import React from 'react';
import { Helmet } from 'react-helmet-async';

const Loading = () => {
    return (
        <div className='min-h-[calc(100vh-358.09px)]  flex justify-center items-center '>
            <Helmet><title>CurioBox||Loading..</title></Helmet>
           {/* <span className=" loading bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 loading-spinner w-24"></span> */}
           <span className=" loading bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 loading-spinner w-24"></span> 
        </div>
    );
};

export default Loading;