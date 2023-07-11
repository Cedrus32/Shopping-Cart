import React, { useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// import useCart from '../hooks/useCart'; // FIX: remove
import ViewProvider from '../contexts/ViewContext';

import Menu from '../components/Menu';
import NotFound from '../components/NotFound';
import Landing from './Landing';
import Shop from './Shop';
import CategoryView from './CategoryView';
import ItemView from './ItemView';
import Cart from './Cart';


const App = () => {
    // const { 
    //     cart,
    //     addItem,
    //     removeItem,
    //     updateItem,
    //     getCount,
    //     getItem,
    // } = useCart();

    // <Routes>
    //     <Route path='*' element={<NotFound />} status={404} />
    // </Routes>

    return (
        <HashRouter basename='/'>
            <Menu />
            <main>
                <Routes>
                    <Route index path='/' element={<Landing />} />
                    <Route path='/shop' element={<Shop />}>
                        <Route path=':category' element={
                            <ViewProvider>
                                <CategoryView />
                            </ViewProvider>
                        } />
                        <Route path='product/:id' element={<ItemView />} />
                    </Route>
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </main>
        </HashRouter>
    )
};

export default App;

