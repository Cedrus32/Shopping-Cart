import React from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';

const PageNav = () => {
    const linkNames = ['Home', 'Shop'];
    let navLinks = [];
    const linkList = document.getElementById('menu-links');

    function toggleNavLinks() {
        linkList.classList.toggle('flex');
        linkList.classList.toggle('hide');
    }

    function createNavLink(name) {
        let navQuery;
        switch (name) {
            case 'Home':
                navQuery = '';
                break;
            case 'Shop':
                navQuery = 'shop/all';
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
            <img src='../icons/menu.svg' alt='menu' id="menu" onClick={toggleNavLinks} />
            <div id='menu-links' className='flex'>
                {navLinks}
            </div>
        </>
    )
}

export default PageNav;
