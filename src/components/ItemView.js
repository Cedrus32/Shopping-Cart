import React from 'react';
import { useParams } from 'react-router-dom';

const ItemView = () => {
    const { category, item } = useParams();
    console.log(category, item);

    return (
        <span>query: {category} - {item}</span>
    )
}

export default ItemView;
