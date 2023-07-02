import React from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';

const PageNav = () => {
    const linkNames = ['Home', 'Shop'];
    let navLinks = [];
    const linkList = document.getElementById('menu-links');

    function toggleLinks() {
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
            <li key={uniqid()}>
                <NavLink to={navQuery}>{name}</NavLink>
            </li>
        );
    }

    linkNames.forEach(item => {
        navLinks.push(createNavLink(item));
    });

    return (
        <>
            <img src='../icons/menu.svg' alt='menu' id="menu" onClick={toggleLinks} />
            <ul id='menu-links' className='hide'>
                {navLinks}
            </ul>
        </>
    )
}

export default PageNav;
