import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import RemoveButton from './RemoveButton';

const ItemLine = (props) => {
    const { data, removeItem, updateItem } = props;

    let subtotal = data.price * data.count;

    return (
        <div className='item-line'>
            <RemoveButton removeItem={removeItem} id={data.id}/>
            <img src={data.image} alt={data.title} />
            <span className='title'>{data.title}</span>
            <Counter updateItem={updateItem} id={data.id} count={data.count}/>
            <span className='price'>{data.price}</span>
            <span className='subtotal'>{subtotal}</span>
        </div>
    )
}
ItemLine.propTypes = {
    data: PropTypes.object,
    removeItem: PropTypes.func,
    updateItem: PropTypes.func
}

export default ItemLine;
