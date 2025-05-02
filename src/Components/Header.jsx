import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center'>
          <img src="/logo.png" alt="" className="w-[450px]" />
          <p>Journalism Without Fear or Favour</p>
          <p>Sunday, November 27, 2025</p>
        </div>
    );
};

export default Header;