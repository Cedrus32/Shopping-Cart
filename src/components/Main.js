import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import LandingView from './LandingView';

const App = () => {
    return (
        <main>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingView />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
};

export default App;

