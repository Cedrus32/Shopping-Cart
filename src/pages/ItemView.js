import React from 'react';

import useGetItem from '../hooks/useGetItem';

import Product from '../components/Product';
import ProductNotFound from '../components/ProductNotFound';

const ItemView = () => {
    const { exists, data } = useGetItem();

    let content;
    if (exists.inStore !== null) {
        if (!exists.inStore) {
            content = <ProductNotFound key='not-found' />;
        } else {
            content = <Product exists={exists.inCart} data={data} />;
        }
    }

    return (
        <section id='item-view' className='content'>
            {content}
        </section>
    )
};

export default ItemView;
