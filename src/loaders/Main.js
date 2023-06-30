import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import useCart from '../hooks/useCart';

import Navigation from '../components/Navigation';
import LandingView from '../pages/LandingView';
import CategoryView from '../pages/CategoryView';
import ItemView from '../pages/ItemView';
import CartView from '../pages/CartView';


const Main = () => {
    const { 
        cart,
        view,
        addItem,
        removeItem,
        updateItem,
        getCount,
        getItem,
    } = useCart();

    return (
        <>
            <Navigation count={getCount()} />
            <section id='page'>
                <Routes>
                    <Route path='/' element={<LandingView />} />
                    <Route path='/:category' element={<CategoryView />} />
                    <Route path='/:category/:id' element={<ItemView cartItem={getItem(view)} addItem={addItem} removeItem={removeItem} updateItem={updateItem} />} />
                    <Route path='/cart' element={<CartView cart={cart} removeItem={removeItem} updateItem={updateItem} />} />
                </Routes>
            </section>
        </>
    )
};

export default Main;

