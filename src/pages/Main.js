import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import useCart from '../hooks/useCart';
import useStore from '../hooks/useStore';

import Navigation from '../components/Navigation';
import LandingView from './LandingView';
import CategoryView from './CategoryView';
import ItemView from './ItemView';
import CartView from './CartView';

const Main = (props) => {
    console.log('main mount');
    const { storageStatus } = props;
    const { 
        cart,
        view,
        updateView,
        addItem,
        removeItem,
        updateItem,
        getCount,
        getItem,
    } = useCart(storageStatus);
    const { store, getProducts } = useStore();

    // NOTE: query all items at Main mount, pass filteredItems[] and getProducts() to CategoryView and ItemView

    // TODO: move state into in CartContext (cart items) and ViewContext (product items)

    return (
        <>
            <Navigation count={getCount(cart)} />
            <section id='page'>
                <Routes>
                    <Route path='/' element={<LandingView />} />
                    <Route path='/:category' element={<CategoryView getProducts={getProducts}/>} />
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

