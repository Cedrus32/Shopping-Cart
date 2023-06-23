import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../components/Navigation';
import LandingView from './LandingView';
import CategoryView from './CategoryView';
import ItemView from './ItemView';
import CartView from './CartView';

const App = () => {
    const [ cart, setCart ] = useState([]);
    const [ view, setView ] = useState(null);

    // state setters
    function updateView(value) {
        setView(value);
    }
    // state getters
    function getCount() {
        let sum = 0;
        cart.forEach(item => sum += item.count);
        return sum;
    }
    // state queriers

    return (
        <>
            <Navigation count={getCount()}/>
            <section id='page'>
                <Routes>
                    <Route path='/' element={<LandingView />} />
                    <Route path='/:category' element={<CategoryView />} />
                    <Route path='/:category/:id' element={<ItemView />} />
                    <Route path='/cart' element={<CartView />} />
                </Routes>
            </section>
        </>
    )
};

export default App;

