import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import useGetCat from '../hooks/useGetCat';

import ItemCard from '../components/ItemCard';

const CategoryView = (props) => {
    const { category } = useParams();
    const { getProducts } = props;
    const { data } = useGetCat({category: category, getProducts: getProducts});

    function getPageTitle(value) {
        if (value === "men's clothing") {
            return "Men's Clothing";
        } else if (value === "women's clothing") {
            return "Women's Clothing";
        } else if (value === 'jewelery') {
            return 'Jewelery';
        } else if (value === 'electronics') {
            return 'Electronics';
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
            <section id='content' className='category-view'>{itemCards}</section>
        </>
    )
};
CategoryView.propTypes = {
    getProducts: PropTypes.func,
}

export default CategoryView;
