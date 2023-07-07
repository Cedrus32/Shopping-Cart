import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import PageNav from './PageNav';
import CartSummary from './CartSummary';

import backward from '../icons/back.svg';
import forward from '../icons/for.svg';
import logo from '../icons/odin-icon.svg';

const Menu = (props) => {
    const { count } = props;
    const navigate = useNavigate();

    console.log(window.history);

    return (
        <menu id='site-menu'>
            <PageNav />
            <img role='navigation' id='nav-home' src={logo} alt={'Odin Shop Home'} onClick={() => navigate('/home')} />
            <CartSummary count={count}/>
        </menu>
    )
};
Menu.propTypes = {
    count: PropTypes.number,
}

export default Menu;
