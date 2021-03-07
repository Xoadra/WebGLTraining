import { render, screen } from '@testing-library/react';

import App from './App';


test('renders WebGL Fundamentals link', () => {
    render(<App/>);
    const linkElement = screen.getByText(/webgl fundamentals/i);
    expect(linkElement).toBeInTheDocument();
});
