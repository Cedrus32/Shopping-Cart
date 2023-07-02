import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemCard = (props) => {
    const navigate = useNavigate();
    const { data } = props;
    let navQuery = `${data.category}/${data.id}`;

    return (
        <article role='article' className='item-card' data-testid={data.id} data-id={data.id} onClick={() => navigate(navQuery)}>
            <img src={data.image} alt={data.title} />
            <span>{data.title}</span>
            <span>{data.price}</span>
        </article>
    )
}
ItemCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ItemCard;
