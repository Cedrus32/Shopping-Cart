import React from 'react';
import PropTypes from 'prop-types';

import del from '../icons/delete.svg';

const RemoveButton = (props) => {
    const { location, removeItem, id } = props;
    let content;

    if (location === 'itemView') {
        content = <><img src={del} alt='remove item' /> Remove</>
    } else {
        content = <img src={del} alt='remove item' />
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
