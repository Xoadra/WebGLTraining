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
