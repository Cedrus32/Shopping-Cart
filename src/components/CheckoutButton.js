import React from 'react';
import PropTypes from 'prop-types';

const CheckoutButton = (props) => {
    const { alertCheckout } = props;

    return (
        <button id='checkout' type='button' onClick={alertCheckout}>Checkout</button>
    )
};
CheckoutButton.propTypes = {
    alertCheckout: PropTypes.func,
}

export default CheckoutButton;
