import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import ShopNav from '../components/ShopNav';

const Shop = () => {
    const { category } = useParams();

    function getPageTitle(value) {
        if (value === "men's clothing") {
            return "Men's Clothing";
        } else if (value === "women's clothing") {
            return "Women's Clothing";
        } else if (value === 'jewelery') {
            return 'Jewelery';
        } else if (value === 'electronics') {
            return 'Electronics';
        } else {
            return 'All Products';
        }
    }

    let pageTitle = getPageTitle(category);

    return (
        <>
            <h1 data-testid='page-title'>{pageTitle}</h1>
            <ShopNav />
            <Outlet />
        </>
        
    )
};

export default Shop;
