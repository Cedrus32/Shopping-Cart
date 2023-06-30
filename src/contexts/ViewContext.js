import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ViewContext = createContext(null);

const ViewProvider = (props) => {
    const [ view, setView ] = useState(null);

        return (
            <ViewContext.Provider value={{ view, setView }}>
                {props.children}
            </ViewContext.Provider>
        )
};
ViewProvider.propTypes = {
    children: PropTypes.element,
};

export default ViewProvider;
