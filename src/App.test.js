import { render, screen, within } from '@testing-library/react';

import App from './App';


beforeEach(() => render(<App/>));


test('renders WebGL Training App link', () => {
    const name = /webgl training app/i;
    const headerElement = screen.getByRole('banner');
    const linkElement = within(headerElement).getByRole('link', { name });
    expect(linkElement).toBeInTheDocument();
});

test('renders WebGL Fundamentals link', () => {
    const name = /webgl fundamentals/i;
    const footerElement = screen.getByRole('contentinfo');
    const linkElement = within(footerElement).getByRole('link', { name });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
});

test('renders MDN Web Docs link', () => {
    const name = /mdn web docs/i;
    const footerElement = screen.getByRole('contentinfo');
    const linkElement = within(footerElement).getByRole('link', { name });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
});
