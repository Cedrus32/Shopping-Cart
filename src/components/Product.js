import React from 'react';
import PropTypes from 'prop-types';

import formatCurrency from '../scripts/currency';
import useCart from '../hooks/useCart';

import Counter from '../components/Counter';
import AddButton from '../components/AddButton';
import RemoveButton from '../components/RemoveButton';

const Product = (props) => {
    const { exists, data } = props;
    const { addItem, removeItem, updateItem } = useCart();
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
            <img src={data.image} alt={data.title} />
            <h1 data-testid='page-title'>{data.title}</h1>
            <p id='price'>{formatCurrency(data.price)}</p>
            <p id='description'>{data.description}</p>
            <menu id='item-action'>
                {counter}
                {button}
            </menu>
        </>
    )
};
Product.propTypes = {
    exists: PropTypes.bool,
    data: PropTypes.object,
}

export default Product;
