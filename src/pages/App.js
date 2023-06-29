import React from 'react';

import Main from './Main';
import getLSStatus from '../scripts/getLSStatus';
import useStore from '../hooks/useStore';

const App = () => {
    const { store, getProducts } = useStore();
    const storageStatus = getLSStatus();
    console.log(store, store)

    return (
        <Main storageStatus={storageStatus} getProducts={getProducts} />
    )
}

export default App;
