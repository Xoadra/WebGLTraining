import React from 'react';
import { render, screen, within } from '@testing-library/react';

import ViewArea from './ViewArea';


test('renders without figcaption text before loading webgl', () => {
    const mockUseEffect = jest.spyOn(React, 'useEffect').mockImplementation();
    render(<ViewArea/>);
    mockUseEffect.mockRestore();
    const figureElement = screen.getByRole('figure');
    const captionElement = within(figureElement).getByText(/.*/, { selector: 'figcaption' });
    expect(captionElement).toBeEmptyDOMElement();
});

test('renders figcaption error text if webgl is unavailable', () => {
    render(<ViewArea/>);
    const figureElement = screen.getByRole('figure');
    const captionElement = within(figureElement).getByText(/.*/, { selector: 'figcaption' });
    expect(captionElement).toHaveTextContent(/webgl won't work! so sad.../i);
});

test('renders figcaption content status text if webgl is available', () => {
    const mockGetContext = jest.spyOn(HTMLCanvasElement.prototype, 'getContext');
    mockGetContext.mockReturnValue({
        compileShader: jest.fn(),
        createShader: jest.fn(),
        deleteShader: jest.fn(),
        getShaderInfoLog: jest.fn(shader => 'Info'),
        getShaderParameter: jest.fn((shader, status) => true),
        shaderSource: jest.fn()
    });
    render(<ViewArea/>);
    mockGetContext.mockRestore();
    const figureElement = screen.getByRole('figure');
    const captionElement = within(figureElement).getByText(/.*/, { selector: 'figcaption' });
    expect(captionElement).toHaveTextContent(/content coming soon.../i);
});
