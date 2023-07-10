import React from 'react';
import { useNavigate } from 'react-router-dom';

import PageNav from './PageNav';
import CartSummary from './CartSummary';

import CountProvider from '../contexts/CountContext';

// import backward from '../icons/back.svg'; // TODO: implement hashHistory
// import forward from '../icons/for.svg'; // TODO: implement hashHistory 
import logo from '../icons/odin-icon.svg';

const Menu = () => {
    const navigate = useNavigate();

    return (
        <menu id='site-menu'>
            <PageNav />
            <img role='navigation' id='nav-home' src={logo} alt={'Odin Shop Home'} onClick={() => navigate('/')} />
            <CountProvider>
                <CartSummary />
            </CountProvider>
        </menu>
    )
};

export default Menu;
