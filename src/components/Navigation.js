import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import PageNav from './PageNav';
import CartSummary from './CartSummary';

import backward from '../icons/back.svg';
import forward from '../icons/for.svg';
import logo from '../icons/odin-icon.svg';

const Navigation = (props) => {
    const { count } = props;
    const navigate = useNavigate();

    return (
        <nav>
            <PageNav />
            <img src={backward} alt={'Previous Page'} id='back' className='navigate' onClick={() => navigate(-1)} />
            <img src={logo} alt={'Odin Shop Home'} id='logo' onClick={() => navigate('/')} />
            <img src={forward} alt={'Next Page'} id='forward' className='navigate' onClick={() => navigate(1)} />
            <CartSummary count={count}/>
        </nav>
    )
};
Navigation.propTypes = {
    count: PropTypes.number,
}

export default Navigation;
