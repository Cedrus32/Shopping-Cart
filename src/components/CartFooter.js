import React from 'react';
import PropTypes from 'prop-types';

import CheckoutButton from './CheckoutButton';

const CartFooter = (props) => {
    const { cartTotal, alertCheckout } = props;

    return (
        <footer>
            <p>Total {cartTotal}</p>
            <CheckoutButton alertCheckout={alertCheckout} />
        </footer>
    )
};
CartFooter.propTypes = {
    cartTotal: PropTypes.number,
    alertCheckout: PropTypes.func,
}

export default CartFooter;
