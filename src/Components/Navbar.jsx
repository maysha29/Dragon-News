import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div></div>
            <div className='flex gap-5 '>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-3'>
                <img src="/user.png" alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;