import { useState, useEffect } from 'react';

const useStore = () => {
    const [ store, setStore ] = useState([]);

    function getProducts(query) {
        let filteredItems = [];
        if (query.type === 'category') {
            console.log('confirm cat query');
            console.log(store);
            store.forEach(item => {
                if (item.category === query.value) {
                    filteredItems.push(item);
                }
            });
        } else if (query.type === 'id') {
            console.log('confirm id query');
            console.log(store);
            filteredItems.push(store[store.findIndex(item => item.id === query.value)]);
        }
        return filteredItems;
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(result => result.json())
            .then(data => setStore(data));
    }, []);

    return { store, getProducts }
}

export default useStore;
