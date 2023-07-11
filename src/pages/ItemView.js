import React from 'react';

import useGetItem from '../hooks/useGetItem';
import formatCurrency from '../scripts/currency';

import Counter from '../components/Counter';
import AddButton from '../components/AddButton';
import RemoveButton from '../components/RemoveButton';

const ItemView = () => {
    const { exists, data, updateItem, removeItem, addItem } = useGetItem();
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

export default ItemView;
