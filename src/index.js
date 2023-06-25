import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Main from './pages/Main'

import './styles/reset.css';
import './styles/layout.css';
import './styles/colors.css';

// import icons from './scripts/icons.js';
// import fonts from './scripts/fonts.js';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
);
