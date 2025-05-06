import React from 'react';

const Loading = () => {
    return (
        <div className=' min-h-screen flex justify-center items-center '>
           <span className="loading bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 loading-spinner loading-lg"></span>
           <span className="loading bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 loading-spinner loading-xl"></span> 
        </div>
    );
};

export default Loading;