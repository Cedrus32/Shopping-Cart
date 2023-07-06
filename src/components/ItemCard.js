import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemCard = (props) => {
    const navigate = useNavigate();
    const { data } = props;
    let navQuery = `/shop/product/${data.id}`;

    return (
        <article className='item-card' data-id={data.id} onClick={() => navigate(navQuery)}>
            <img src={data.image} alt={data.title} />
            <p id='title'>{data.title}</p>
            <p id='price'>${data.price}</p>
        </article>
    )
}
ItemCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ItemCard;
