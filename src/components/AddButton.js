import React from 'react';
import PropTypes from 'prop-types';

const AddButton = (props) => {
    const { addItem, data } = props;

    return (
        <button type='button' className='add' onClick={() => addItem(data)}>Add To Cart</button>
    )
};
AddButton.propTypes ={
    addItem: PropTypes.func,
    data: PropTypes.object,
}

export default AddButton;
