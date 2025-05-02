import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const HomeLayout = () => {
    return (
        <div className="w-full">
            <header>
            <Header/>
            </header>
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;