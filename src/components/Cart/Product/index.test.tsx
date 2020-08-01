import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { initialStoreMock, mockStore } from 'src/__mocks__/redux/store';

import CartProduct from '.';
import { mockStoreData } from 'src/__mocks__/api/data';
import { buildImageURI } from '@utils/URIs/image';

const cardProps = { ...mockStoreData.products[0] };

describe('Card Horizontal', () => {
  it('should have title', () => {
    const store = mockStore(initialStoreMock);

    const { getByText } = render(
      <Provider store={store}>
        <CartProduct {...cardProps} />
      </Provider>
    );

    expect(getByText(cardProps.title)).toBeInTheDocument();
  });

  it('Should have correct image URI', () => {
    const store = mockStore(initialStoreMock);

    const { container } = render(
      <Provider store={store}>
        <CartProduct {...cardProps} />
      </Provider>
    );

    const imageURI = buildImageURI(cardProps.featuredMedia.baseURI, {
      width: 80,
    });
    expect(container.querySelector('img')).toHaveAttribute('src', imageURI);
  });
});
