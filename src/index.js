import React from 'react';
import { createRoot } from 'react-dom/client';

import StoreProvider from './contexts/StoreContext';
import StorageProvider from './contexts/StorageContext';
import CartProvider from './contexts/CartContext';
import App from './routers/App';

import './styles/reset.css';
import './styles/layout.css';
import './styles/colors.css';
import './styles/typo.css';

const app = createRoot(document.getElementById('app'));
app.render(
    <StoreProvider>
        <StorageProvider>
            <CartProvider>
                    <App />
            </CartProvider>
        </StorageProvider>
    </StoreProvider>
);
