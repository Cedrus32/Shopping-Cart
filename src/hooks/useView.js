import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import ViewContext from '../contexts/ViewContext';

const useView = (props) => {
    const { id } = props;
    const { view, setView } = useContext(ViewContext);

    function updateView(viewObj) {
        if (viewObj.type === 'id') {
            setView(viewObj.value);
        } else {
            setView(viewObj.value);
        }
    }

    useEffect(() => {
        updateView({type: 'id', value: id});
        return () => {
            updateView({type: 'reset', value: null});
        }
    })

    return view;
};
useView.propTypes = {
    id: PropTypes.number,
}
