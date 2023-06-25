import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import LinkList from './LinkList.js';
import CartSummary from './CartSummary';

const Navigation = (props) => {
    const { count } = props;
    const navigate = useNavigate();

    let back = '<<';
    let forw = '>>';

    return (
        <nav>
            <LinkList />
            <NavLink id='back' onClick={() => navigate(-1)}>{back}</NavLink>
            <NavLink id='forward' onClick={() => navigate(1)}>{forw}</NavLink>
            <CartSummary count={count}/>
        </nav>
    )
};
Navigation.propTypes = {
    count: PropTypes.number,
}

export default Navigation;
