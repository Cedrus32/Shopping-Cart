import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import StorageProvider from './contexts/StorageContext';
import StoreProvider from './contexts/StoreContext';
import CartProvider from './contexts/CartContext';
import ViewProvider from './contexts/ViewContext';
import App from './pages/App';

import './styles/reset.css';
import './styles/layout.css';
import './styles/colors.css';
import './styles/typo.css';

const app = createRoot(document.getElementById('app'));
app.render(
    <StorageProvider>
        <StoreProvider>
            <CartProvider>
                <ViewProvider>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </ViewProvider>
            </CartProvider>
        </StoreProvider>
    </StorageProvider>
);
