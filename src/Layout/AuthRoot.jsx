import React from 'react';
import Login from '../Pages/AuthPages/Login';
import Register from '../Pages/AuthPages/Register';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const AuthRoot = () => {
    return (
        <div className=' bg-base-200'>
           <div className=' pb-6'>
           <header className=' shadow-sm'>
              <section className=' w-11/12 mx-auto'>
              <Navbar></Navbar>
              </section>
            </header>
           </div>
            <main className=' w-11/12 mx-auto'>
                <section className=" min-h-[calc(100vh-358.09px)]">

                <Outlet></Outlet>
                </section>
            </main>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default AuthRoot;