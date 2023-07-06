import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import formatCurrency from '../scripts/currency';

const ItemCard = (props) => {
    const navigate = useNavigate();
    const { data } = props;
    let navQuery = `/shop/product/${data.id}`;

    return (
        <article className='item-card' data-id={data.id} onClick={() => navigate(navQuery)}>
            <img src={data.image} alt={data.title} />
            <p className='title'>{data.title}</p>
            <p className='price'>{formatCurrency(data.price)}</p>
        </article>
    )
}
ItemCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ItemCard;
