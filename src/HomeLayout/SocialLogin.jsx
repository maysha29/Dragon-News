import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
             <h2 className='font-semibold mb-5'>Login With</h2>
           <div className='space-y-3'> 
            <button className='btn w-full btn-outline btn-secondary'><FaGoogle />Login with Google</button>
           <button className='btn w-full btn-outline btn-primary'><FaGithub />Login with Github</button>
           </div>   
        </div>
    );
};

export default SocialLogin;