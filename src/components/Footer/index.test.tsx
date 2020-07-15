import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from '.';

describe('Footer', () => {
    it('Should render links', () => {
        const { container } = render(<Footer />);

        expect(container.querySelectorAll('a')).toHaveLength(2);
    });
});
