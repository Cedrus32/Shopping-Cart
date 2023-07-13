import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const StoreContext = createContext(null);

const StoreProvider = (props) => {
    const [ store, setStore ] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
                .then(result => result.json())
                .then(data => {
                    setStore(data);
                })
        };
        fetchData();
    }, []);

    function inStore(query) {
        const bool = store.includes(item => item.id == query);
        return bool;
    }

    return (
        <StoreContext.Provider value={{ store }}>
            {props.children}
        </StoreContext.Provider>
    )
};
StoreProvider.propTypes = {
    children: PropTypes.element,
}

export default StoreProvider;
