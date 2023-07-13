import React from 'react';
import PropTypes from 'prop-types';

import formatCurrency from '../scripts/currency';
import useCart from '../hooks/useCart';

import Counter from './Counter';
import RemoveButton from './RemoveButton';

const ItemLine = (props) => {
    const { data } = props;
    const { removeItem, updateItem } = useCart();

    return (
       <article className='item-line'>
            <img src={data.image} alt={data.title} className='item-img' />
            <span className='title'>{data.title}</span>
            <span className='price'>Price: {formatCurrency(data.price)}</span>
            <span className='subtotal'>Sub: {formatCurrency(data.price * data.count)}</span>
            <span className='count'>Quant: {data.count}</span>
            <Counter updateItem={updateItem} id={data.id} count={data.count}/>
            <RemoveButton location='cart' removeItem={removeItem} id={data.id}/>
        </article>
    )
}
ItemLine.propTypes = {
    data: PropTypes.object,
}

export default ItemLine;
