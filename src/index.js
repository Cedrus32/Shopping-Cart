import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main'

import './styles/reset.css';
import './styles/style.css';
// import icons from './scripts/icons.js';
// import fonts from './scripts/fonts.js';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
