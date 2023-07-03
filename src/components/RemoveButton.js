import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = (props) => {
    const { removeItem, id } = props;

    return (
        <button type='button' className='remove' onClick={() => removeItem(id)}><img src='../icons/delete.svg' alt='remove item' /> Remove</button>
    )
};
RemoveButton.propTypes = {
    removeItem: PropTypes.func,
    id: PropTypes.number,
}

export default RemoveButton;
