import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    const { updateItem, id, count } = props;
    return (
        <div className='item-counter'>
            <button type='button' className='decrement' onClick={() => updateItem(id, 'decrement')}>-</button>
            <input defaultValue={count}/>
            <button type='button' className='increment' onClick={() => updateItem(id, 'increment')}>+</button>
        </div>
    )
};
Counter.propTypes = {
    updateItem: PropTypes.func,
    id: PropTypes.number,
    count: PropTypes.number,
}

export default Counter;
