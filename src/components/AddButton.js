import React from 'react';
import PropTypes from 'prop-types';

const AddButton = (props) => {
    const { addItem, data } = props;

    return (
        <button id='add-item' type='button' onClick={() => addItem(data)}>Add To Cart</button>
    )
};
AddButton.propTypes ={
    addItem: PropTypes.func,
    data: PropTypes.object,
}

export default AddButton;
