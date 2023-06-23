import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../components/Navigation';
import LandingView from './LandingView';
import CategoryView from './CategoryView';
import ItemView from './ItemView';
import CartView from './CartView';

const App = () => {
    const [ cart, setCart ] = useState([
        {
            id: 1,
            title: 'item 1',
            description: 'description',
            price: 100,
            count: 1,
            image: 'imageURL'
        }
    ]);
    const [ view, setView ] = useState(null);

    // state setters
    function updateView(value) {
        setView(parseInt(value));
    }
    // state getters
    function getCount() {
        let sum = 0;
        cart.forEach(item => sum += item.count);
        return sum;
    }
    function getItem(query) {
        return cart.find(item => item.id === query);
    }
    // state queriers

    return (
        <>
            <Navigation count={getCount()} />
            <section id='page'>
                <Routes>
                    <Route path='/' element={<LandingView />} />
                    <Route path='/:category' element={<CategoryView updateView={updateView} />} />
                    <Route path='/:category/:id' element={<ItemView getItem={getItem} view={view} />} />
                    <Route path='/cart' element={<CartView />} />
                </Routes>
            </section>
        </>
    )
};

export default App;

