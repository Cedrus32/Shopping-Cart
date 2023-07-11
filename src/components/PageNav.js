import React from 'react';
import { NavLink } from 'react-router-dom';

import menu from '../icons/menu.svg';

const PageNav = () => {
    const linkNames = ['Home', 'Shop', 'Cart'];
    let navLinks = [];
    const linkList = document.getElementById('page-nav');

    function toggleNavLinks() {
        linkList.classList.toggle('show');
        linkList.classList.toggle('hide');
    }

    function createNavLink(name, itemKey) {
        let navQuery;
        if (name === 'Home') {
            navQuery = '/'
        } else {
            navQuery = `/${name.toLowerCase()}`;
        }
        return (
            <NavLink key={itemKey} to={navQuery}>{name}</NavLink>
        );
    }

    linkNames.forEach((item, index) => {
        navLinks.push(createNavLink(item, index));
    });

    return (
        <>
            <img role='button' id='toggle-page-nav' src={menu} alt='toggle page nav' onClick={toggleNavLinks} />
            <nav id='page-nav' className='show'>
                {navLinks}
            </nav>
        </>
    )
}

export default PageNav;
