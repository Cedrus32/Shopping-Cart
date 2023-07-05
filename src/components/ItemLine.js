import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import RemoveButton from './RemoveButton';

const ItemLine = (props) => {
    const { data, removeItem, updateItem } = props;

    let subtotal = data.price * data.count;

    return (
       <article className='item-line'>
            <img src={data.image} alt={data.title} className='item-img' />
            <p className='title'>{data.title}</p>
            <p className='price'>Price: {data.price}</p>
            <p className='subtotal'>Sub: {subtotal}</p>
            <p className='count'>Quant: {data.count}</p>
            <Counter updateItem={updateItem} id={data.id} count={data.count}/>
            <RemoveButton location='cart' removeItem={removeItem} id={data.id}/>
        </article>
    )
}
ItemLine.propTypes = {
    data: PropTypes.object,
    removeItem: PropTypes.func,
    updateItem: PropTypes.func
}

export default ItemLine;
