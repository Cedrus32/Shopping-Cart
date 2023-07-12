import React from 'react';
import { useParams } from 'react-router-dom';

import useGetCat from '../hooks/useGetCat';

import CatNav from '../components/CatNav';
import ProductNotFound from '../components/ProductNotFound';
import ItemCard from '../components/ItemCard';

const CategoryView = () => {
    console.log('CATEGORY render');
    const { category } = useParams()
    const { data } = useGetCat();

    function getPageTitle(str) {
        let strParts = str.split(' ');
        strParts = strParts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
        return strParts.join(' ');
    }

    let pageTitle = getPageTitle(category);
    let content = [];
    if (data.length === 0) {
        content.push(<ProductNotFound key='not-found' />);
    } else {
        data.forEach(item => {
            content.push(<ItemCard key={item.id} data={item} />);
        });
    }

    return (
        <>
            <menu id='category-menu'>
                <h1 data-test-id='page-title'>{pageTitle}</h1>
                <CatNav />
            </menu>
            <section id='category-view' className='content'>{content}</section>
        </>
    )
};

export default CategoryView;
