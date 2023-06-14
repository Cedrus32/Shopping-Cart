import React from 'react';
import { useParams } from 'react-router-dom';
import uniqid from 'uniqid';
import ItemLine from './ItemLine';
import CartFooter from './CartFooter';

const CartView = () => {
    const testCart = [
        {
            title: 'item 1',
            price: 100,
            count: 3,
            image: 'imgURL',
        },
        {
            title: 'item 2',
            price: 50,
            count: 1,
            image: 'imgURL',
        },
        {
            title: 'item 3',
            price: 750,
            count: 2,
            image: 'imgURL',
        },
    ];

    let items = [];
    testCart.forEach(item => {
        items.push(<ItemLine key={uniqid()} data={item} />);
    })

    return (
        <>
            <h1 data-testid='page-title'>Your Cart</h1>
            <section data-testid='page-content'>
                <section>
                    {items}
                </section>
                <CartFooter />
            </section>
        </>
    )
}

export default CartView;
