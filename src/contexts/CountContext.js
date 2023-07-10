import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from './CartContext';

export const CountContext = createContext(0);

const CountProvider = (props) => {
    const { cart } = useContext(CartContext);
    const count = getCount(cart);

    function getCount(array) {
        let sum = 0;
        array.forEach(item => sum += item.count);
        return sum;
    }

    return (
        <CountContext.Provider value={{ count }}>
            { props.children }
        </CountContext.Provider>
    )
};
CountProvider.propTypes = {
    children: PropTypes.element,
}

export default CountProvider;
