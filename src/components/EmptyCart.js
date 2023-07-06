import React from 'react';
import uniqid from 'uniqid';

const EmptyCart = () => {
    return (
        <h2 key={uniqid()}>Your cart is empty.</h2>
    )
};

export default EmptyCart;
