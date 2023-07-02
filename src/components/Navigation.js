import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import PageNav from './PageNav';
import CartSummary from './CartSummary';

const Navigation = (props) => {
    const { count } = props;
    const navigate = useNavigate();

    return (
        <nav>
            <PageNav />
            <img src='../icons/back.svg' alt={'Previous Page'} id='back' className='navigate' onClick={() => navigate(-1)} />
            <img src='../icons/odin-icon.svg' alt={'Odin Shop Home'} id='logo' onClick={() => navigate('/')} />
            <img src='../icons/for.svg' alt={'Next Page'} id='forward' className='navigate' onClick={() => navigate(1)} />
            <CartSummary count={count}/>
        </nav>
    )
};
Navigation.propTypes = {
    count: PropTypes.number,
}

export default Navigation;
