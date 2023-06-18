import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import LinkList from './LinkList.js';
import CartSummary from './CartSummary';

const Navigation = () => {
    const navigate = useNavigate();

    let back = '<<';
    let forw = '>>';

    return (
        <nav>
            <LinkList />
            <NavLink id='back' onClick={() => navigate(-1)}>{back}</NavLink>
            <NavLink id='forward' onClick={() => navigate(1)}>{forw}</NavLink>
            <CartSummary />
        </nav>
    )
};

export default Navigation;
