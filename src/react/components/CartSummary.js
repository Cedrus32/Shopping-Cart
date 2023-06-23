import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CartSummary = (props) => {
    let { count } = props;

    return (
        <div role='cart-summary' className='cart-summary'>
            <Link to='/cart'>Cart</Link>
            <span role='item-count'>{count}</span>
        </div>
    )
};
CartSummary.propTypes = {
    count: PropTypes.number,
}

export default CartSummary;
