import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us on</h2>
            <div className="join join-vertical w-full">
             <button className="btn bg-base-100 justify-start join-item"><FaFacebook />Facebook</button>
             <button className="btn bg-base-100 justify-start join-item"><AiFillTwitterCircle />Twitter</button>
             <button className="btn bg-base-100 justify-start join-item"><FaInstagram />Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;