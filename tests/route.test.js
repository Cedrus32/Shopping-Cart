import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import Main from '../src/react/pages/Main';

describe('Main component', () => {
    it('navigates to "Home"', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: "Home"});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/');
    });
    it('navigates to "Men\'s Clothing"', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: "Men's Clothing"});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/mens');
    });
    it('navigates to "Women\'s Clothing"', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: "Women's Clothing"});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/womens');
    });
    it('navigates to "Jewelery"', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: 'Jewelery'});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/jewelery');
    });
    it('navigates to "Electronics"', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: 'Electronics'});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/electronics');
    });
    it('navigates to "Cart"', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: 'Cart'});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/cart');
    });
});
