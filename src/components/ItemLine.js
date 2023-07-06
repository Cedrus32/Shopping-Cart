import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import RemoveButton from './RemoveButton';

import formatCurrency from '../scripts/currency';

const ItemLine = (props) => {
    const { data, removeItem, updateItem } = props;

    let subtotal = formatCurrency(data.price * data.count);

    return (
       <article className='item-line'>
            <img src={data.image} alt={data.title} className='item-img' />
            <span className='title'>{data.title}</span>
            <span className='price'>Price: ${data.price}</span>
            <span className='subtotal'>Sub: {subtotal}</span>
            <span className='count'>Quant: {data.count}</span>
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
