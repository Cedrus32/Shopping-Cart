import React from 'react';
import PropTypes from 'prop-types';

import formatCurrency from '../scripts/currency';

import CheckoutButton from './CheckoutButton';

const CartFooter = (props) => {
    const { cartTotal, alertCheckout } = props;

    return (
        <footer>
            <p>Total {formatCurrency(cartTotal)}</p>
            <CheckoutButton alertCheckout={alertCheckout} />
        </footer>
    )
};
CartFooter.propTypes = {
    cartTotal: PropTypes.number,
    alertCheckout: PropTypes.func,
}

export default CartFooter;
