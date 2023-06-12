import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import uniqid from 'uniqid';

const Navigation = () => {
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

    return (
        <nav>
            <ul>
                {navLinks}
            </ul>
            <Link to='cart'>Cart</Link>
        </nav>
    )
};

export default Navigation;
