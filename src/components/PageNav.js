import React from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';

import menu from '../icons/menu.svg';

const PageNav = () => {
    const linkNames = ['Home', 'Shop', 'Cart'];
    let navLinks = [];
    const linkList = document.getElementById('page-nav');

    function toggleNavLinks() {
        linkList.classList.toggle('show');
        linkList.classList.toggle('hide');
    }

    function createNavLink(name) {
        let navQuery;
        switch (name) {
            case 'Home':
                navQuery = '';
                break;
            case 'Shop':
                navQuery = 'shop';
                break;
            default:
                navQuery = `${name.toLowerCase()}`;
        }
        return (
            <NavLink key={uniqid()} to={navQuery}>{name}</NavLink>
        );
    }

    linkNames.forEach(item => {
        navLinks.push(createNavLink(item));
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
