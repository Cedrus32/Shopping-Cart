import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import ItemLine from '../components/ItemLine';
import CartFooter from '../components/CartFooter';

const CartView = (props) => {
    const { cart, removeItem, updateItem } = props;
    let items = [];
    let total = 0;

    function alertCheckout() {
        let string = '~~ Your Order ~~ \n';
        cart.forEach(item => {
            string = string.concat(`${item.title}: $${item.price} x ${item.count} = ${item.price * item.count} \n`);
        });
        string = string.concat(`~~ Your Total: ${total} ~~`);
        alert(string);
    }

    cart.forEach(item => {
        items.push(<ItemLine key={uniqid()} data={item} removeItem={removeItem} updateItem={updateItem} />);
        total += (item.price * item.count);
    });

    return (
        <>
            <h1 data-testid='page-title'>Your Cart</h1>
            <section id='content' className='cart-view'>
                <div className='cart-list'>
                    {items}
                </div>
                <CartFooter cartTotal={total} alertCheckout={alertCheckout} />
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
