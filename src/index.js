import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import StoreProvider from './contexts/StoreContext';
import getLSStatus from './scripts/getLSStatus';
import Main from './loaders/Main';

import './styles/reset.css';
import './styles/layout.css';
import './styles/colors.css';

// import icons from './scripts/icons.js';
// import fonts from './scripts/fonts.js';

// NOTE: initializes state and context providers prior to initial Main mount
// BUG: when jumping to category/item views, store is not yet iniialized

// TODO: move useCart to CartContext and return CartProvider
// TODO: move getLSStatus to StorageContext and return StatusProvider

const storageStatus = getLSStatus();

const root = createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <BrowserRouter>
            <Main storageStatus={storageStatus} />
        </BrowserRouter>
    </StoreProvider>
);
