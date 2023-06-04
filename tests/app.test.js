import React from 'react';
// import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../src/components/App.js';

describe('App component', () => {
    it('renders magnificent monkeys', () => {
        const {container} = render(<App/>);
        expect(container).toMatchSnapshot();
    });

    it('renders radical rhinos after after button click', async () => {
        const user = userEvent.setup();

        render(<App/>);
        const button = screen.getByRole('button', {
            name: 'Change Heading'
        });
        
        await user.click(button);

        expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i);
    });
});
