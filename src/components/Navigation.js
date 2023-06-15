import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import CartSummary from './CartSummary';

const Navigation = () => {
    const navigate = useNavigate();

    const linkNames = ['Home', "Men's Clothing", "Women's Clothing", 'Jewelery', 'Electronics'];
    let navLinks = [];
    for (let i = 0; i < linkNames.length; i++) {
        let navText = linkNames[i];
        let navQuery;
        switch (navText) {
            case 'Home':
                navQuery = '';
                break;
            case "Men's Clothing":
                navQuery = 'mens';
                break;
            case "Women's Clothing":
                navQuery = 'womens';
                break;
            default:
                navQuery = navText.toLowerCase();
        }
        navLinks.push(<li key={uniqid()}><NavLink to={navQuery}>{navText}</NavLink></li>);
    }

    let back = '<<';
    let forw = '>>';

    // <NavLink to={'/'}>{back}</NavLink>
    // <NavLink to={'/cart'}>{forw}</NavLink>

    return (
        <nav>
            <ul>
                {navLinks}
            </ul>
            <NavLink onClick={() => navigate(-1)}>{back}</NavLink>
            <NavLink onClick={() => navigate(1)}>{forw}</NavLink>
            <CartSummary />
        </nav>
    )
};

export default Navigation;
