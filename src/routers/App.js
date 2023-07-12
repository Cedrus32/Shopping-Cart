import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import ViewProvider from '../contexts/ViewContext';

import Menu from '../components/Menu';
import Landing from '../pages/Landing';
import CategoryView from '../pages/CategoryView';
import ItemView from '../pages/ItemView';
import Cart from '../pages/Cart';
import PageNotFound from '../pages/PageNotFound';
import Shop from '../routers/Shop';


const App = () => {
    console.log('APP render');
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
                    <Route path='*' element={<PageNotFound />} status={404}/>
                </Routes>
            </main>
        </HashRouter>
    )
};

export default App;

