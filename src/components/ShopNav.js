import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const ShopNav = (props) => {
    const { category } = props;
    const linkNames = ['All', "Men's Clothing", "Women's Clothing", 'Jewelery', 'Electronics'];
    let navLinks = [];
    let pageTitle;


    function createNavLink(name) {
        let navQuery = `/shop/${name.toLowerCase()}`;
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
ShopNav.propTypes = {
    category: PropTypes.string,
}

export default ShopNav;
