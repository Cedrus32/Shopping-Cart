import React from 'react';
import { useParams } from 'react-router-dom';
import uniqid from 'uniqid';

import useGetCat from '../hooks/useGetCat';

import ShopNav from '../components/ShopNav';
import ItemCard from '../components/ItemCard';

const CategoryView = () => {
    const { category } = useParams();
    const { data } = useGetCat(category);

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
    let itemCards = [];
    data.forEach(item => {
        itemCards.push(<ItemCard key={uniqid()} data={item} />);
    });

    return (
        <>
            <h1 data-testid='page-title'>{pageTitle}</h1>
            <ShopNav />
            <section id='content' className='category-view'>{itemCards}</section>
        </>
    )
};

export default CategoryView;
