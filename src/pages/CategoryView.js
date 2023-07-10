import React, { useContext } from 'react';
import uniqid from 'uniqid';

import useGetCat from '../hooks/useGetCat';
import { ViewContext } from '../contexts/ViewContext';

import CatNav from '../components/CatNav';
import ItemCard from '../components/ItemCard';

const CategoryView = () => {
    const { view } = useContext(ViewContext);
    const { data } = useGetCat(view);

    let itemCards = [];
    data.forEach(item => {
        itemCards.push(<ItemCard key={uniqid()} data={item} />);
    });

    return (
        <>
            <menu id='category-menu'>
                <h1 data-test-id='page-title'>{view}</h1>
                <CatNav />
            </menu>
            <section id='category-view' className='content'>{itemCards}</section>
        </>
    )
};

export default CategoryView;
