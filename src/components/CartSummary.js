import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CountContext } from '../contexts/CountContext';

import basket from '../icons/basket.svg';

const CartSummary = () => {
    const { count } = useContext(CountContext);
    console.log(count);
    const navigate = useNavigate();
    
    return (
        <>
            <img role='navigation' id='nav-cart' src={basket} alt='Your Cart' onClick={() => navigate('/cart')} />
            <div role='figure' id='cart-item-count'>{count}</div>
        </>
    )
};

export default CartSummary;
