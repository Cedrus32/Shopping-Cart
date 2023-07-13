import React from 'react';
import { useParams } from 'react-router-dom';

import useStore from '../hooks/useStore';

import CatNav from '../components/CatNav';
import ProductNotFound from '../components/ProductNotFound';
import ItemCard from '../components/ItemCard';

const CategoryView = () => {
    const { category } = useParams()
    const { getCat } = useStore();
    const data = getCat(category);
    console.log(data);

    function getPageTitle(str) {
        let strParts = str.split(' ');
        strParts = strParts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
        return strParts.join(' ');
    }

    let pageTitle = getPageTitle(category);
    let content = [];
    if (data !== null && data.length === 0) {
        content.push(<ProductNotFound key='not-found' />);
    } else if (data !== null) {
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
