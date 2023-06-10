import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryView = () => {
    const { category } = useParams();

    return (
        <span>query: {category}</span>
    )
}

export default CategoryView;
