import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import StorageProvider from './contexts/StorageContext';
import StoreProvider from './contexts/StoreContext';
import CartProvider from './contexts/CartContext';
import ViewProvider from './contexts/ViewContext';
import Main from './pages/Main';

import './styles/reset.css';
import './styles/layout.css';
import './styles/colors.css';

// import icons from './scripts/icons.js';
// import fonts from './scripts/fonts.js';

// BUG: when jumping to category/item views, store is not yet iniialized


const root = createRoot(document.getElementById('root'));
root.render(
    <StorageProvider>
        <StoreProvider>
            <CartProvider>
                <ViewProvider>
                    <BrowserRouter>
                        <Main />
                    </BrowserRouter>
                </ViewProvider>
            </CartProvider>
        </StoreProvider>
    </StorageProvider>
);
