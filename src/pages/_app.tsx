import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { persistStore } from 'redux-persist';

import '@styles/main.scss';
import { useStore } from '@redux/store';

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);

    useEffect(() => {
        persistStore(store);
    }, []);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
