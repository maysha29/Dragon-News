import React from 'react';
import {format} from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center'>
          <img src="/logo.png" alt="" className="w-[450px]" />
          <p className='text-2xl'>Journalism Without Fear or Favour</p>
          <p className='text-bold text-accent'>{format(new Date(),"EEEE, MMMM  dd, yyyy" ,)}</p>
        </div>
    );
};

export default Header;