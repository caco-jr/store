import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import Layout from '.';
import { initialStoreMock, mockStore } from 'src/__mocks__/redux/store';

describe('LayoutComponent', () => {
  it('Should have main tag', () => {
    const store = mockStore(initialStoreMock);

    const { container } = render(
      <Provider store={store}>
        <Layout title="Layout Testing" />
      </Provider>
    );

    expect(container.querySelector('main')).toBeInTheDocument();
  });

  it('Should have defaultProps for "title"', () => {
    expect(Layout.defaultProps?.title).toBeDefined();
  });

  it('Should render children content', () => {
    const store = mockStore(initialStoreMock);
    const text = 'Hello world!';

    const { getByText } = render(
      <Provider store={store}>
        <Layout>
          <h1>{text}</h1>
        </Layout>
      </Provider>
    );

    expect(getByText(text)).toBeInTheDocument();
  });
});
