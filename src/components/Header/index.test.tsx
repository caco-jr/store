import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import Header from '.';
import { STORE_NAME } from '@utils/strings';
import { mockStore, initialStoreMock } from 'src/__mocks__/redux/store';

describe('Header content checks', () => {
  it('Should have Store name', () => {
    const store = mockStore(initialStoreMock);

    const { getByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(getByText(STORE_NAME)).toBeInTheDocument();
  });
});
