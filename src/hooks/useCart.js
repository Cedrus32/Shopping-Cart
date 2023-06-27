import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// TODO: move storageStatus into context (set and save prior to Main mount)

const useCart = (props) => {
    const storageStatus = props;

    const [ cart, setCart ] = useState([]);
    const [ storagePulled, setStoragePulled ] = useState(false);
    const [ view, setView ] = useState(null);

    useEffect(() => {
        if (storageStatus === true) {
            let items = [];
            for (let i = 0; i < localStorage.length; i++) {
                items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
            setCart(items);
            setStoragePulled(true);
        }
    }, []);

    // state setters
    function updateView(value) {
        setView(parseInt(value));
    }
    function addItem(data) {
        let item = {
            id: data.id,
            title: data.title,
            description: data.description,
            price: data.price,
            count: data.count + 1,
            image: data.image,
        }
        setCart([
            ...cart,
            item
        ]);
        if (storagePulled) {
            localStorage.setItem(data.id, JSON.stringify(item));
            // console.log(JSON.parse(localStorage.getItem(data.id)));
        }
    }
    function removeItem(query) {
        setCart(cart.filter(item => item.id !== query));
        if (storagePulled) {
            localStorage.removeItem(query);
            // console.log(JSON.parse(localStorage.getItem(query)));
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
            // console.log(JSON.parse(localStorage.getItem(query)));
        }
    }
    // state getters
    function getCount(data) {
        let sum = 0;
        data.forEach(item => sum += item.count);
        return sum;
    }
    function getItem(query) {
        return cart.find(item => item.id === query);
    }
    return {
        cart,
        view,
        updateView,
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
