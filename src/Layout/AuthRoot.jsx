import React from 'react';
import Login from '../Pages/AuthPages/Login';
import Register from '../Pages/AuthPages/Register';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const AuthRoot = () => {
    return (
        <div className=' bg-base-200'>
           <div className=' sticky top-0 z-10 pb-6'>
           <header className=' bg-gray-300 shadow-sm'>
              <section className=' w-11/12 mx-auto'>
              <Navbar></Navbar>
              </section>
            </header>
           </div>
           <section className=' max-w-7xl mx-auto'>

            <main className=' w-11/12 mx-auto'>
                <section className=" min-h-[calc(100vh-358.09px)]">

                <Outlet></Outlet>
                </section>
            </main>
           </section>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default AuthRoot;