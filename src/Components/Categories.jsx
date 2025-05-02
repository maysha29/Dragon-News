import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise=fetch("/categories.json").then((res)=>res.json());
const Categories = () => {
    const categories=use(categoryPromise);
    return (
        <div>
            <h2>All categories</h2>
            <div>
                {categories.map((category)=>(
                    <NavLink>{category.name}</NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;