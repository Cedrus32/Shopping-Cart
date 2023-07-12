import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import basket from '../icons/basket.svg';

import { CountContext } from '../contexts/CountContext';

const CartSummary = () => {
    const { count } = useContext(CountContext);
    const navigate = useNavigate();
    
    return (
        <>
            <img role='navigation' id='nav-cart' src={basket} alt='Your Cart' onClick={() => navigate('/cart')} />
            <div role='figure' id='cart-item-count'>{count}</div>
        </>
    )
};

export default CartSummary;
