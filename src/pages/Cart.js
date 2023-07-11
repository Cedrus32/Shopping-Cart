import React from 'react';
import uniqid from 'uniqid';

import useCart from '../hooks/useCart';

import ItemLine from '../components/ItemLine';
import EmptyCart from '../components/EmptyCart';
import CartFooter from '../components/CartFooter';

const Cart = () => {
    const { cart, removeItem, updateItem } = useCart();
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

    if (cart.length === 0) {
        items.push(<EmptyCart key={uniqid()}/>);
    } else {
        cart.forEach(item => {
            items.push(<ItemLine key={uniqid()} data={item} removeItem={removeItem} updateItem={updateItem} />);
            total += (item.price * item.count);
        });
    }

    return (
        <>
            <h1 data-testid='page-title'>Your Cart</h1>
            <section id='cart-view' className='content'>
                <section id='cart-list'>
                    {items}
                </section>
                <CartFooter cartTotal={total} alertCheckout={alertCheckout} />
            </section>
        </>
    )
};

export default Cart;
