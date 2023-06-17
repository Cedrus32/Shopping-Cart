import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../components/Navigation';
import LandingView from './LandingView';
import CategoryView from './CategoryView';
import ItemView from './ItemView';
import CartView from './CartView';

const App = () => {
    return (
        <>
            <Navigation />
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

