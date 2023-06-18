import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemCard = (props) => {
    const { data } = props;
    let navQuery = `${data.id}`;

    return (
        <Link to={navQuery}>
            <div className='item-card' data-testid={`item-card-${data.id}`}>
                <img src={data.image} alt={data.title} />
                <span>{data.title}</span>
                <span>{data.price}</span>
            </div>
        </Link>
    )
}
ItemCard.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ItemCard;
