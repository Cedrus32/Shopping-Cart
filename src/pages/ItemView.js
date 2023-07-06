import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import useGetItem from '../hooks/useGetItem';

import Counter from '../components/Counter';
import AddButton from '../components/AddButton';
import RemoveButton from '../components/RemoveButton';

import formatCurrency from '../scripts/currency';

const ItemView = (props) => {
    const { id } = useParams();
    const { setView, cartItem, addItem, removeItem, updateItem } = props;
    const { exists = null, data = {
        image: null,
        title: null,
        price: null,
        description: null,
    } } = useGetItem({setView: setView, cartItem: cartItem, id: id});
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
            <section id='item-view' className='content'>
                <img src={data.image} alt={data.title} />
                <h1 data-testid='page-title'>{data.title}</h1>
                <p id='price'>{formatCurrency(data.price)}</p>
                <p id='description'>{data.description}</p>
                <menu id='item-action'>
                    {counter}
                    {button}
                </menu>
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
