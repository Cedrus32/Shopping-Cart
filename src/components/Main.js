import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import LandingView from './LandingView';
import CategoryView from './CategoryView';
import ItemView from './ItemView';
import CartView from './CartView';

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<LandingView />} />
                <Route path='/:category' element={<CategoryView />} />
                <Route path='/:category/:item' element={<ItemView />} />
                <Route path='/cart' element={<CartView />} />
            </Routes>
        </>
    )
};

export default App;

