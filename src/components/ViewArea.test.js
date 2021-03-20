import { render, screen, within } from '@testing-library/react';

import ViewArea from './ViewArea';


test('renders without any figcaption text', () => {
    render(<ViewArea/>)
    const pattern = /(a-z)*/i;
    const figureElement = screen.getByRole('figure');
    const captionElement = within(figureElement).getByText(pattern, { selector: 'figcaption' });
    expect(captionElement).toBeInTheDocument();
});
