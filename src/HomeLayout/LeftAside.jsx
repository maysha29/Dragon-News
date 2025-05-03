import React, { Suspense } from 'react';
import Categories from '../Components/categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-ball loading-lg"></span>}> 
            <Categories></Categories>
            </Suspense>
          
        </div>
    );
};

export default LeftAside;