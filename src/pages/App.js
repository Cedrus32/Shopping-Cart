import React, { useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import useCart from '../hooks/useCart';
import { ViewContext } from '../contexts/ViewContext';

import Menu from '../components/Menu';
import Landing from './Landing';
import Shop from './Shop';
import CategoryView from './CategoryView';
import ItemView from './ItemView';
import Cart from './Cart';
import NotFound from './NotFound';


const App = () => {
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
        <HashRouter basename='/' >
            <Menu count={getCount()} />
            <main>
                <Routes>
                    <Route index path='/home' element={<Landing />} />
                    <Route path='/shop' element={<Shop />}>
                        <Route path=':category' element={<CategoryView />} />
                        <Route path='product/:id' element={<ItemView setView={setView} cartItem={getItem(view)} addItem={addItem} removeItem={removeItem} updateItem={updateItem} />} />
                    </Route>
                    <Route path='/cart' element={<Cart cart={cart} removeItem={removeItem} updateItem={updateItem} />} />
                    <Route path='*' element={<NotFound />} status={404} />
                </Routes>
            </main>
        </HashRouter>
    )
};

export default App;

