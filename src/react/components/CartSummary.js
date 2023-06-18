import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = () => {
    let count = 3;

    return (
        <div role='cart-summary' className='cart-summary'>
            <Link to='/cart'>Cart</Link>
            <span role='item-count'>{count}</span>
        </div>
    )
}

export default CartSummary;
