import React from 'react';
import PropTypes from 'prop-types';

import CheckoutButton from './CheckoutButton';

const CartFooter = (props) => {
    const { cartTotal } = props;
    return (
        <footer>
            <p>Total {cartTotal}</p>
            <CheckoutButton />
        </footer>
    )
};
CartFooter.propTypes = {
    cartTotal: PropTypes.number,
}

export default CartFooter;
