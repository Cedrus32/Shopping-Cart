import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const StoreContext = createContext([]);

const StoreProvider = (props) => {
    const [ store, setStore ] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            fetch('https://fakestoreapi.com/products', {mode: 'cors'})
                .then(result => result.json())
                .then(data => {
                    setStore(data);
                })
        };
        fetchData();
        // const mockFetch = [
        //     {
        //         id: 1,
        //         category: "men's clothing",
        //         title: "Men's Clothing 1",
        //         price: 100,
        //         description: 'description',
        //         image: 'imageURL',
        //     },
        //     {
        //         id: 2,
        //         category: "men's clothing",
        //         title: "Men's Clothing 2",
        //         price: 200,
        //         description: 'description',
        //         image: 'imageURL',
        //     },
        //     {
        //         id: 3,
        //         category: "women's clothing",
        //         title: "Women's Clothing 1",
        //         price: 300,
        //         description: 'description',
        //         image: 'imageURL',
        //     },
        //     {
        //         id: 4,
        //         category: "women's clothing",
        //         title: "Men's Clothing 2",
        //         price: 400,
        //         description: 'description',
        //         image: 'imageURL',
        //     },
        //     {
        //         id: 5,
        //         category: "jewelery",
        //         title: "Jewelery 1",
        //         price: 500,
        //         description: 'description',
        //         image: 'imageURL',
        //     },
        //     {
        //         id: 6,
        //         category: "jewelery",
        //         title: "Jewelery 2",
        //         price: 600,
        //         description: 'description',
        //         image: 'imageURL',
        //     },
        //     {
        //         id: 7,
        //         category: "electronics",
        //         title: "Electronics 1",
        //         price: 700,
        //         description: 'description',
        //         image: 'imageURL',
        //     },
        //     {
        //         id: 8,
        //         category: "electronics",
        //         title: "Electronics 2",
        //         price: 800,
        //         description: 'description',
        //         image: 'imageURL',
        //     },
        // ]
        // setStore(mockFetch);
    }, []);

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
