import React from 'react';

import useGetItem from '../hooks/useGetItem';

import Product from '../components/Product';
import ProductNotFound from '../components/ProductNotFound';

const ItemView = () => {
    const { exists, data, updateItem, removeItem, addItem } = useGetItem();

    let content;
    if (!exists.inStore) {
        content = <ProductNotFound key='not-found' />
    } else {
        content = <Product exists={exists.inCart} data={data} updateItem={updateItem} removeItem={removeItem} addItem={addItem} />
    }

    return (
        <section id='item-view' className='content'>
            {content}
        </section>
    )
};

export default ItemView;
