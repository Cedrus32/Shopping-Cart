import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import basket from '../icons/basket.svg';

const CartSummary = (props) => {
    let { count } = props;
    const navigate = useNavigate();
    
    return (
        <div role='cart-summary' className='cart-summary'>
            <img src={basket} alt='Basket' onClick={() => navigate('/cart')} />
            <div role='item-count' className='item-count'>{count}</div>
        </div>
    )
};
CartSummary.propTypes = {
    count: PropTypes.number,
}

export default CartSummary;
