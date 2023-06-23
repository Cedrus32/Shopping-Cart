import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    const { count } = props;
    return (
        <div className='item-counter'>
            <button type='button' className='decrement'>-</button>
            <input defaultValue={count}/>
            <button type='button' className='increment'>+</button>
        </div>
    )
};
Counter.propTypes = {
    count: PropTypes.number,
}

export default Counter;
