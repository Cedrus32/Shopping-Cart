import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import ItemCard from '../components/ItemCard';

const CategoryView = () => {
    const { category } = useParams();
    const [query, setQuery] = useState(
        [
            {
                id:1,
                category: 'mens',
                title:'item 1',
                price:100,
                image:'imageURL'
            },
            {
                id:2,
                category: 'mens',
                title:'item 2',
                price:200,
                image:'imageURl'
            },
            {
                id:3,
                category: 'mens',
                title:'item 3',
                price:300,
                image:'imageURl'
            },
        ]
    );

    function getPageTitle(value) {
        if (value === 'mens') {
            return "Men's Clothing";
        } else if (value === 'womens') {
            return "Women's Clothing";
        } else if (value === 'jewelery') {
            return 'Jewelery';
        } else if (value === 'electronics') {
            return 'Electronics';
        }
    }

    let pageTitle = getPageTitle(category);
    let itemCards = [];
    query.forEach(item => {
        itemCards.push(<ItemCard key={uniqid()} data={item} />);
    });

    return (
        <>
            <h1 data-testid='page-title'>{pageTitle}</h1>
            <section id='content' className='category-view'>{itemCards}</section>
        </>
    )
};

export default CategoryView;
