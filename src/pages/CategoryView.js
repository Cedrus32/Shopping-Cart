import React from 'react';
import { useParams } from 'react-router-dom';
import uniqid from 'uniqid';

import useGetCat from '../hooks/useGetCat';

import ShopNav from '../components/ShopNav';
import ItemCard from '../components/ItemCard';

const CategoryView = () => {
    const { category } = useParams();
    const { data } = useGetCat(category);

    let itemCards = [];
    data.forEach(item => {
        itemCards.push(<ItemCard key={uniqid()} data={item} />);
    });

    return (
        <section id='content' className='category-view'>{itemCards}</section>
    )
};

export default CategoryView;
