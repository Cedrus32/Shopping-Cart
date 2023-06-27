import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import useCart from '../hooks/useCart';

import Navigation from '../components/Navigation';
import LandingView from './LandingView';
import CategoryView from './CategoryView';
import ItemView from './ItemView';
import CartView from './CartView';

const Main = (props) => {
    const { storageStatus } = props;
    const { 
        cart,
        view,
        updateView,
        addItem,
        removeItem,
        updateItem,
        getCount,
        getItem
    } = useCart(storageStatus);

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
    storageStatus: PropTypes.bool,
}

export default Main;

