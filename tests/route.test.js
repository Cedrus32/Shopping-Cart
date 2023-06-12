import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import Main from '../src/components/Main';

describe('Main component', () => {
    it('navigates to "Home", correctly renders title', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: "Home"});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/');
        expect(screen.getByTestId('page-title').textContent).toMatch('Shop Odin merch!');
    });
    it('navigates to "Men\'s Clothing", correctly renders title', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: "Men's Clothing"});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/mens');
        expect(screen.getByTestId('page-title').textContent).toMatch("Men's Clothing");
    });
    it('navigates to "Women\'s Clothing", correctly renders title', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: "Women's Clothing"});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/womens');
        expect(screen.getByTestId('page-title').textContent).toMatch("Women's Clothing");
    });
    it('navigates to "Jewelery", correctly renders title', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: 'Jewelery'});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/jewelery');
        expect(screen.getByTestId('page-title').textContent).toMatch('Jewelery');
    });
    it('navigates to "Electronics", correctly renders title', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: 'Electronics'});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/electronics');
        expect(screen.getByTestId('page-title').textContent).toMatch('Electronics');
    });
    it('navigates to "Cart", correctly renders title', async () => {
        const user = userEvent.setup();

        render(<Main />, {wrapper: BrowserRouter});
        const navLink = screen.getByRole('link', {name: 'Cart'});

        await user.click(navLink);
        expect(window.location.pathname).toEqual('/cart');
        expect(screen.getByTestId('page-title').textContent).toMatch('Your Cart');
    });
});
