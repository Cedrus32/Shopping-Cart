import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryView = () => {
    const { category } = useParams();

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

    return (
        <h1 data-testid='page-title'>{pageTitle}</h1>
    )
}

export default CategoryView;
