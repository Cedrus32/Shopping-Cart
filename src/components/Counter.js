import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    const { location, updateItem, id, count } = props;
    let input;
    let firstButton;
    let secondButton;

    function handleChange(e) {
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

    if (location === 'itemView') {
        firstButton = <button type='button' className='decrement' data-action='decrement' onClick={handleChange}>-</button>;
        input = <input type='number' pattern='^[0-9]+$' min={ 1 } step={ 1 } value={count} data-action='set' onKeyDown={handleChange} onChange={handleChange} />;
        secondButton = <button type='button' className='increment' data-action='increment' onClick={handleChange}>+</button>;
    } else {
        firstButton = <button type='button' className='increment' data-action='increment' onClick={handleChange}>+</button>;
        secondButton = <button type='button' className='decrement' data-action='decrement' onClick={handleChange}>-</button>;
    }

    // TODO: style input validation

    return (
        <div className='item-counter'>
            {firstButton}
            {input}
            {secondButton}
        </div>
    )
};
Counter.propTypes = {
    location: PropTypes.string,
    updateItem: PropTypes.func,
    id: PropTypes.number,
    count: PropTypes.number,
}

export default Counter;
