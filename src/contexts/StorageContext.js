import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import getLSStatus from '../scripts/getLSStatus';

export const StorageContext = createContext(false);

const StorageProvider = (props) => {
    // const storageStatus = getLSStatus();
    const storageStatus = false;

    return (
        <StorageContext.Provider value={{ storageStatus }}>
            {props.children}
        </StorageContext.Provider>
    )
};
StorageProvider.propTypes = {
    children: PropTypes.element,
};

export default StorageProvider;
