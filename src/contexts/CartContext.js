import React, { useState, useRef, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { StorageContext } from './StorageContext';

export const CartContext = createContext([]);

const CartProvider = (props) => {
    const { storageStatus } = useContext(StorageContext);
    const [ cart, setCart ] = useState([]);
    let storagePulled = useRef(false);

    useEffect(() => {
        if (storageStatus === true) {
            let items = [];
            for (let i = 0; i < localStorage.length; i++) {
                items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
            setCart(items);
            storagePulled.current = true;
        }
    }, [storageStatus]);

    return (
        <CartContext.Provider value={{ cart, setCart, storagePulled }}>
            {props.children}
        </CartContext.Provider>
    )
};
CartProvider.propTypes = {
    children: PropTypes.element,
};

export default CartProvider;
