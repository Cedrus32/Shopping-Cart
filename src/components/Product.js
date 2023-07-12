import React from 'react';
import PropTypes from 'prop-types';

import formatCurrency from '../scripts/currency';

import Counter from '../components/Counter';
import AddButton from '../components/AddButton';
import RemoveButton from '../components/RemoveButton';

const Product = (props) => {
    const { exists, data, updateItem, removeItem, addItem } = props;
    let counter;
    let button;

    if (exists) {
        counter = <Counter location='itemView' updateItem={updateItem} id={data.id} count={data.count} />;
        button = <RemoveButton location='itemView' removeItem={removeItem} id={data.id} />;
    } else {
        button = <AddButton addItem={addItem} data={data} />;
    }

    return (
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
    )
};
Product.propTypes = {
    exists: PropTypes.bool,
    data: PropTypes.object,
    updateItem: PropTypes.func,
    removeItem: PropTypes.func,
    addItem: PropTypes.func,
}

export default Product;
