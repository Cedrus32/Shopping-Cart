import React from 'react';
import PropTypes from 'prop-types';

import CheckoutButton from './CheckoutButton';

import formatCurrency from '../scripts/currency';

const CartFooter = (props) => {
    const { cartTotal, alertCheckout } = props;

    const total = formatCurrency(cartTotal);

    return (
        <footer>
            <p>Total {total}</p>
            <CheckoutButton alertCheckout={alertCheckout} />
        </footer>
    )
};
CartFooter.propTypes = {
    cartTotal: PropTypes.number,
    alertCheckout: PropTypes.func,
}

export default CartFooter;
