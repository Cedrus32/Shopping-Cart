import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import useItem from '../hooks/useItem';

import Counter from '../components/Counter';
import AddButton from '../components/AddButton';
import RemoveButton from '../components/RemoveButton';

const ItemView = (props) => {
    const { category, id } = useParams(); // NOTE: used for API call
    const { updateView, cartItem, addItem, removeItem, updateItem } = props;
    const { exists, data } = useItem({updateView: updateView, id: id, cartItem: cartItem});
    let counter;
    let button;

    if (exists) {
        counter = <Counter updateItem={updateItem} id={data.id} count={data.count} />;
        button = <RemoveButton removeItem={removeItem} id={data.id} />;
    } else {
        button = <AddButton addItem={addItem} data={data} />;
    }

    // add unmount effect -> clear view in main state, clear API calls

    return (
        <>
            <h1 data-testid='page-title'>{data.title}</h1>
            <section id='content' className='item-view'>
                <img src={data.image} alt={data.title} />
                <p id='description'>{data.description}</p>
                <div className='item-action'>
                    {counter}
                    {button}
                </div>
            </section>
        </>
    )
};
ItemView.propTypes = {
    updateView: PropTypes.func,
    cartItem: PropTypes.object,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
    updateItem: PropTypes.func,
}

export default ItemView;
