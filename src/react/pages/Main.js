import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../components/Navigation';
import LandingView from './LandingView';
import CategoryView from './CategoryView';
import ItemView from './ItemView';
import CartView from './CartView';

const App = () => {
    const [ cart, setCart ] = useState([
        // {
        //     id: 1,
        //     title: 'item 1',
        //     description: 'description',
        //     price: 100,
        //     count: 1,
        //     image: 'imageURL'
        // }
    ]);
    const [ view, setView ] = useState(null);

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
    }
    // state getters
    function getCount(data) {
        console.log(data)
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
                    <Route path='/:category' element={<CategoryView updateView={updateView} />} />
                    <Route path='/:category/:id' element={<ItemView cartItem={getItem(view)} addItem={addItem} />} />
                    <Route path='/cart' element={<CartView />} />
                </Routes>
            </section>
        </>
    )
};

export default App;

