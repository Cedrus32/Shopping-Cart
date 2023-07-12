import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

const useCart = () => {
    const { cart, setCart, storagePulled } = useContext(CartContext);

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
    // checkers
    function inCart(query) {
        let exists = false;
        cart.forEach(item => {
            if (item.id == query) {
                exists = true;
            }
        });
        return exists;
    }
    // getters
    function getCartItem(query) {
        return cart.find(item => item.id == query);
    }

    return {
        cart,
        addItem,
        removeItem,
        updateItem,
        inCart,
        getCartItem,
    }
}

export default useCart;
