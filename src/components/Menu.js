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

    return (
        <menu>
            <PageNav />
            <img role='navigation' id='nav-back' className='navigate' src={backward} alt={'Previous Page'} onClick={() => navigate(-1)} />
            <img role='navigation' id='nav-home' src={logo} alt={'Odin Shop Home'} onClick={() => navigate('/')} />
            <img role='navigation' id='nav-forward' className='navigate' src={forward} alt={'Next Page'} onClick={() => navigate(1)} />
            <CartSummary count={count}/>
        </menu>
    )
};
Menu.propTypes = {
    count: PropTypes.number,
}

export default Menu;
