import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import preloadAll from 'jest-next-dynamic';

import { mockStoreData } from 'src/__mocks__/api/data';
import { mockStore, initialStoreMock } from 'src/__mocks__/redux/store';
import IndexPage, { getStaticProps } from '.';

describe('Home page', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  it('Should render without crash', () => {
    const store = mockStore(initialStoreMock);

    const { container } = render(
      <Provider store={store}>
        <IndexPage store={store} />
      </Provider>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});

describe('getStaticProps', () => {
  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks();
  });

  it('Should call products API', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify(mockStoreData));

    const response = await getStaticProps(IndexPage.contextTypes);
    expect(response).toMatchObject({
      props: {
        store: mockStoreData,
      },
    });
  });
});
