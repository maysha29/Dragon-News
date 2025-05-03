import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise=fetch("/categories.json").then((res)=>res.json());
const Categories = () => {
    const categories=use(categoryPromise);
    return (
        <div>
            <h2>All categories</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {categories.map((category)=>(
                    <NavLink key={category.id}  to={`/category${category.id}`}
                     className={'btn bg-base-100 border-0 hover:bg-base-300 text-accent font-semibold'}>{category.name}</NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;