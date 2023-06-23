import React from 'react';
import { useParams } from 'react-router-dom';

import Counter from '../components/Counter';
import AddButton from '../components/AddButton';
import RemoveButton from '../components/RemoveButton';

const ItemView = () => {
    const { category, id } = useParams(); // NOTE: used for API call
    const data = { // TEST: make state, replace with API fetch or state query
        id: 1,
        title: 'item 1',
        description: 'description',
        price: 100,
        count: 1,
        image: 'imageURL'
    };
    let counter;
    let button;

    if (data.count === 0) {
        button = <AddButton />;
    } else {
        counter = <Counter />;
        button = <RemoveButton />;
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
}

export default ItemView;
