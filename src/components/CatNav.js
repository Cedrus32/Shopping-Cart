import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';

import { ViewContext } from '../contexts/ViewContext';

const CatNav = () => {
    const { setView } = useContext(ViewContext);
    const linkNames = ['All', "Men's Clothing", "Women's Clothing", 'Jewelery', 'Electronics'];
    let navLinks = [];

    function createNavLink(name) {
        let navQuery = `/shop/${name.toLowerCase()}`;
        return (
            <NavLink key={uniqid()} to={navQuery} onClick={() => setView(name)}>{name}</NavLink>
        )
    }

    linkNames.forEach(item => {
        navLinks.push(createNavLink(item));
    })

    return (
        <nav id='category-nav'>
            {navLinks}
        </nav>
    )
};

export default CatNav;
