import { useContext } from 'react';
import PropTypes from 'prop-types';

import { CartContext } from '../contexts/CartContext';

const useCart = () => {
    const { cart, setCart, view, setView, storagePulled } = useContext(CartContext);

    // state setters
    function addItem(data) {
        let item = {
            id: data.id,
            title: data.title,
            description: data.description,
            price: data.price,
            count: 1,
            image: data.image,
        }
        setCart([
            ...cart,
            item
        ]);
        if (storagePulled) {
            localStorage.setItem(data.id, JSON.stringify(item));
        }
    }
    function removeItem(query) {
        setCart(cart.filter(item => item.id !== query));
        if (storagePulled) {
            localStorage.removeItem(query);
        }
    }
    function updateItem(query, action, value) {
        let index = cart.findIndex(item => item.id === query);
        let item = cart[index];
        if (action === 'increment') {
            item.count += 1;
        } else if (action === 'decrement' && item.count > 1) {
            item.count -= 1;
        } else if (action === 'set' && value > 0) {
            item.count = value;
        }
        let cartCopy = cart;
        cartCopy.splice(index, 1, item);
        setCart([...cartCopy]);
        if (storagePulled) {
            localStorage.setItem(query, JSON.stringify(item));
        }
    }
    // state getters
    function getCount() {
        let sum = 0;
        cart.forEach(item => sum += item.count);
        return sum;
    }
    function getItem(query) {
        return cart.find(item => item.id == query);
    }

    return {
        cart,
        view,
        addItem,
        removeItem,
        updateItem,
        getCount,
        getItem,
    }
}
useCart.propTypes = {
    storageStatus: PropTypes.bool,
};

export default useCart;
