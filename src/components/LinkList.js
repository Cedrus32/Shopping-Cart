import React from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';

const LinkList = () => {
    const linkNames = ['Home', "Men's Clothing", "Women's Clothing", 'Jewelery', 'Electronics'];
    let navLinks = [];

    function createNavLink(name) {
        let navQuery;
        switch (name) {
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
                navQuery = name.toLowerCase();
        }
        return (
            <li key={uniqid()}>
                <NavLink to={navQuery}>{name}</NavLink>
            </li>
        );
    }

    linkNames.forEach(item => {
        navLinks.push(createNavLink(item));
    });

    return (
        <ul>
            {navLinks}
        </ul>
    )
}

export default LinkList;
