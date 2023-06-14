import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const ItemLine = (props) => {
    const { data } = props;

    let subtotal = data.price * data.count;

    return (
        <div>
            <img src={data.image} alt={data.title} />
            <div>
                <span>{data.title}</span>
                <Counter />
            </div>
            <div>
                <span>{data.price}</span>
                <span>{subtotal}</span>
            </div>
        </div>
    )
}
ItemLine.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ItemLine;
