import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { initialStoreMock, mockStore } from '@redux/store/mock';

import CartProduct from '.';
import { mockStoreData } from 'src/__mocks__/api/data';

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
});
