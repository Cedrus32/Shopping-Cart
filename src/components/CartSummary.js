import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import basket from '../icons/basket.svg';

const CartSummary = (props) => {
    let { count } = props;
    const navigate = useNavigate();
    
    return (
        <>
            <img role='navigation' id='nav-cart' src={basket} alt='Your Cart' onClick={() => navigate('/cart')} />
            <div role='figure' id='cart-item-count'>{count}</div>
        </>
    )
};
CartSummary.propTypes = {
    count: PropTypes.number,
}

export default CartSummary;
