import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import ItemLine from '../components/ItemLine';
import CartFooter from '../components/CartFooter';

const CartView = (props) => {
    const { cart, removeItem, updateItem } = props;
    // const testCart = [
    //     {
    //         title: 'item 1',
    //         price: 100,
    //         count: 3,
    //         image: 'imgURL',
    //     },
    //     {
    //         title: 'item 2',
    //         price: 50,
    //         count: 1,
    //         image: 'imgURL',
    //     },
    //     {
    //         title: 'item 3',
    //         price: 750,
    //         count: 2,
    //         image: 'imgURL',
    //     },
    // ];

    let items = [];
    cart.forEach(item => {
        items.push(<ItemLine key={uniqid()} data={item} removeItem={removeItem} updateItem={updateItem} />);
    })

    return (
        <>
            <h1 data-testid='page-title'>Your Cart</h1>
            <section id='content' className='cart-view'>
                <div className='cart-list'>
                    {items}
                </div>
                <CartFooter />
            </section>
        </>
    )
};
CartView.propTypes = {
    cart: PropTypes.array,
    removeItem: PropTypes.func,
    updateItem: PropTypes.func,
}

export default CartView;
