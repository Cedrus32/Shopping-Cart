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
    //     <Route path='/shop' element={<Shop />}>
    //         <Route path='product/:id' element={<ItemView setView={setView} cartItem={getItem(view)} addItem={addItem} removeItem={removeItem} updateItem={updateItem} />} />
    //     </Route>
    //     <Route path='/cart' element={<Cart cart={cart} removeItem={removeItem} updateItem={updateItem} />} />
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
                    </Route>
                </Routes>
            </main>
        </HashRouter>
    )
};

export default App;

