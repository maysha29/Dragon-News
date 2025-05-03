import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../HomeLayout/LeftAside';
import RightAside from '../HomeLayout/RightAside';


const HomeLayout = () => {
    return (
        <div className="w-full">
            <header>
            <Header/>
            <section className='w-11/12 mx-auto my-3'> 
            <LatestNews></LatestNews></section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3'>
                <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;