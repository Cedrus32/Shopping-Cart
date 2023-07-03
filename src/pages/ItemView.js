import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import useGetItem from '../hooks/useGetItem';

import Counter from '../components/Counter';
import AddButton from '../components/AddButton';
import RemoveButton from '../components/RemoveButton';

const ItemView = (props) => {
    const { id } = useParams();
    const { setView, cartItem, addItem, removeItem, updateItem } = props;
    const { exists, data } = useGetItem({setView: setView, cartItem: cartItem, id: id});
    let counter;
    let button;

    if (exists) {
        counter = <Counter location='itemView' updateItem={updateItem} id={data.id} count={data.count} />;
        button = <RemoveButton location='itemView' removeItem={removeItem} id={data.id} />;
    } else {
        button = <AddButton addItem={addItem} data={data} />;
    }

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
    setView: PropTypes.func,
    cartItem: PropTypes.object,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
    updateItem: PropTypes.func,
}

export default ItemView;
