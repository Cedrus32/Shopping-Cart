import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import RemoveButton from './RemoveButton';

const ItemLine = (props) => {
    const { data } = props;

    let subtotal = data.price * data.count;

    return (
        <div className='item-line'>
            <RemoveButton />
            <img src={data.image} alt={data.title} />
            <span className='title'>{data.title}</span>
            <Counter />
            <span className='price'>{data.price}</span>
            <span className='subtotal'>{subtotal}</span>
        </div>
    )
}
ItemLine.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ItemLine;
