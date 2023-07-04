import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import useCart from '../hooks/useCart';
import { ViewContext } from '../contexts/ViewContext';

import Navigation from '../components/Navigation';
import Landing from './Landing';
import Shop from './Shop';
import CategoryView from './CategoryView';
import ItemView from './ItemView';
import Cart from './Cart';


const Main = () => {
    const { 
        cart,
        addItem,
        removeItem,
        updateItem,
        getCount,
        getItem,
    } = useCart();
    const { view, setView } = useContext(ViewContext);

    return (
        <>
            <Navigation count={getCount()} />
            <section id='page'>
                <Routes>
                    <Route index element={<Landing />} />
                    <Route path='shop' element={<Shop />}>
                        <Route path=':category' element={<CategoryView />} />
                        <Route path='product/:id' element={<ItemView setView={setView} cartItem={getItem(view)} addItem={addItem} removeItem={removeItem} updateItem={updateItem} />} />
                    </Route>
                    <Route path='cart' element={<Cart cart={cart} removeItem={removeItem} updateItem={updateItem} />} />
                </Routes>
            </section>
        </>
    )
};

export default Main

