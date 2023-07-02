import React from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';

const ShopNav = () => {
    const linkNames = ['All', "Men's Clothing", "Women's Clothing", 'Jewelery', 'Electronics'];
    let navLinks = [];

    function createNavLink(name) {
        let navQuery = `${name.toLowerCase()}`;
        return (
            <NavLink key={uniqid()} to={navQuery}>{name}</NavLink>
        )
    }

    linkNames.forEach(item => {
        navLinks.push(createNavLink(item));
    })

    return (
        <section id='shop-nav'>
            {navLinks}
        </section>
    )
};

export default ShopNav;
