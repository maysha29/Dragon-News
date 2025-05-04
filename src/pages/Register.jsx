import React from 'react';
import { Link } from 'react-router';


const Register = () => {
    return (
        <div>
            <header></header>
            <div className='flex justify-center min-h-screen items-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0   shadow-2xl">
        <h2 className='font-semibold text-2xl text-center mt-5'>Register your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
        <label className="label">Name</label>
        <input type="name" className="input" placeholder="Enter your name" />
        <label className="label">Photo URL</label>
        <input type="name" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='font-semibold text-center pt-5'>
            Already Have An Account ? {''} <Link to='/auth/login'className='text-red-500'>Login</Link></p>
        </fieldset>
      </div>
    </div>
        </div>
        </div>
    );
};

export default Register;