import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    const { updateItem, id, count } = props;

    function handleChange(e) {
        console.log(e);
        let action;
        let value;
        if (e.key === 'Backspace') {
            action = 'set';
        } else {
            action = e.target.dataset.action;
        }
        if (action === 'set' && e.key === 'Backspace') {
            if (e.target.value < 10) {
                value = 1;
            } else {
                value = parseInt(e.target.value.slice(0, e.target.value.length - 2));
            }
        } else if (action === 'set' && e.key !== 'Backspace') {
            value = parseInt(e.target.value);
        }
        updateItem(id, action, value);
    }

    // TODO: style input validation
    // TODO: add validation check on change -- if not divisible by 1 (is decimal), flag as invalid

    return (
        <div className='item-counter'>
            <button type='button' className='decrement' data-action='decrement' onClick={handleChange}>-</button>
            <input type='number' pattern='^[0-9]+$' min={ 1 } step={ 1 } value={count} data-action='set' onKeyDown={handleChange} onChange={handleChange} />
            <button type='button' className='increment' data-action='increment' onClick={handleChange}>+</button>
        </div>
    )
};
Counter.propTypes = {
    updateItem: PropTypes.func,
    id: PropTypes.number,
    count: PropTypes.number,
}

export default Counter;
