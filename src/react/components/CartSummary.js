import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = () => {
    let count = 3;

    return (
        <Link to='/cart' className='cart-summary'>
            <span>[{count}]</span>
        </Link>
    )
}

export default CartSummary;
