import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/LeftAside';

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
            <main>
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;