import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = () => {
    let count = 3;

    return (
        <Link to='/cart' className='cart-summary'>
            <span>Cart</span>
            <span>[{count}]</span>
            <span>subtotal</span>
        </Link>
    )
}

export default CartSummary;
