import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = (props) => {
    const { location, removeItem, id } = props;
    let content;

    if (location === 'itemView') {
        content = <><img src='../icons/delete.svg' alt='remove item' /> Remove</>
    } else {
        content = <img src='../icons/delete.svg' alt='remove item' />
    }

    return (
        <button type='button' className='remove' onClick={() => removeItem(id)}>{content}</button>
    )
};
RemoveButton.propTypes = {
    location: PropTypes.string,
    removeItem: PropTypes.func,
    id: PropTypes.number,
}

export default RemoveButton;
