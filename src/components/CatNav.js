import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ViewContext } from '../contexts/ViewContext';

const CatNav = () => {
    const { setView } = useContext(ViewContext);
    const linkNames = ['All', "Men's Clothing", "Women's Clothing", 'Jewelery', 'Electronics'];
    let navLinks = [];

    function createNavLink(name, itemKey) {
        let navQuery = `/shop/${name.toLowerCase()}`;
        return (
            <NavLink key={itemKey} to={navQuery} onClick={() => setView(name)}>{name}</NavLink>
        )
    }

    linkNames.forEach((item, index) => {
        navLinks.push(createNavLink(item, index));
    })

    return (
        <nav id='category-nav'>
            {navLinks}
        </nav>
    )
};

export default CatNav;
