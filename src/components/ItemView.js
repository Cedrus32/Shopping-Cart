import React from 'react';
import { useParams } from 'react-router-dom';
import Counter from './Counter';
import AddButton from './AddButton';

const ItemView = () => {
    const { category, id } = useParams();
    const data = {
        id:1,
        title:'item 1',
        price:100,
        category: 'category',
        description: 'description',
        image:'imageURL'
    };
    

    let pageTitle = data.title;

    return (
        <>
            <h1 data-testid='page-title'>{pageTitle}</h1>
            <section id='content' className='item-view'>
                <img src={data.image} alt={data.title} />
                <p id='description'>{data.description}</p>
                <div className='item-action'>
                    <Counter />
                    <AddButton />
                </div>
            </section>
        </>
    )
}

export default ItemView;
