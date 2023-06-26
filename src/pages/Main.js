import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation';
import LandingView from './LandingView';
import CategoryView from './CategoryView';
import ItemView from './ItemView';
import CartView from './CartView';

const Main = (props) => {
    const { cartContext } = props;
    const [ cart, setCart ] = useState([]);
    const [ storagePulled, setStoragePulled ] = useState(false);
    const [ view, setView ] = useState(null);

    useEffect(() => {
        // localStorage.clear();
        let testIDs = [1, 2, 3, 4, 5];
        testIDs.forEach(id => {
            localStorage.setItem(`${id}`, JSON.stringify(
                {
                    id: id,
                    title: `item ${id}`,
                    description: 'description',
                    price: (100 * id),
                    count: id,
                    image: 'imageURL',
                }
            ))
        });
        if (cartContext === 'storage' && localStorage.length > 0) {
            let items = [];
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                items.push(JSON.parse(localStorage.getItem(key)));
            }
            setCart(items);
            setStoragePulled(true);
        }
    }, []);

    // state setters
    function updateView(value) {
        setView(parseInt(value));
    }
    function addItem(data) {
        setCart([
            ...cart,
            {
                id: data.id,
                title: data.title,
                description: data.description,
                price: data.price,
                count: data.count + 1,
                image: data.image,
            }
        ]);
        // update localStorage
    }
    function removeItem(query) {
        setCart(cart.filter(item => item.id !== query));
        // update localStorage
    }
    function updateItem(query, action, value) {
        let index = cart.findIndex(item => item.id === query);
        let item = cart[index];
        if (action === 'increment') {
            item.count += 1;
        } else if (action === 'decrement' && item.count > 1) {
            item.count -= 1;
        } else if (action === 'set' && value > 0) {
            item.count = value;
        }
        let cartCopy = cart;
        cartCopy.splice(index, 1, item);
        setCart([...cartCopy]);
        // update localStorage
    }
    // state getters
    function getCount(data) {
        let sum = 0;
        data.forEach(item => sum += item.count);
        return sum;
    }
    function getItem(query) {
        return cart.find(item => item.id === query);
    }

    return (
        <>
            <Navigation count={getCount(cart)} />
            <section id='page'>
                <Routes>
                    <Route path='/' element={<LandingView />} />
                    <Route path='/:category' element={<CategoryView />} />
                    <Route path='/:category/:id' element={<ItemView updateView={updateView} cartItem={getItem(view)} addItem={addItem} removeItem={removeItem} updateItem={updateItem} />} />
                    <Route path='/cart' element={<CartView cart={cart} removeItem={removeItem} updateItem={updateItem} />} />
                </Routes>
            </section>
        </>
    )
};
Main.propTypes = {
    cartContext: PropTypes.string,
}

export default Main;

