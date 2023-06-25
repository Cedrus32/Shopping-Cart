import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Counter from '../components/Counter';
import AddButton from '../components/AddButton';
import RemoveButton from '../components/RemoveButton';

const ItemView = (props) => {
    const [ query, setQuery ] = useState(null);
    const { category, id } = useParams(); // NOTE: used for API call
    const { cartItem, addItem, removeItem, updateItem } = props;
    let data = {
        id: null,
        title: null,
        description: null,
        price: null,
        count: null,
        image: null,
    };
    const mockFetch = { // TEST: replace with API fetch
        id: 1,
        title: 'item 1',
        description: 'description',
        price: 100,
        count: 0,
        image: 'imageURL'
    };
    let counter;
    let button;

    data = cartItem;
    if (cartItem) {
        counter = <Counter updateItem={updateItem} id={data.id} count={data.count} />;
        button = <RemoveButton removeItem={removeItem} id={data.id} />;
    } else {
        data = mockFetch;
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
    cartItem: PropTypes.object,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
    updateItem: PropTypes.func,
}

export default ItemView;
