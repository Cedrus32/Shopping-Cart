import { useContext } from 'react';

import { StoreContext } from '../contexts/StoreContext';

const useStore = () => {
    const { store } = useContext(StoreContext);

    // checkers
    function inStore(query) {
        let exists = false;
        store.forEach(item => {
            if (item.id == query) {
                exists = true;
            }
        });
        return exists;
    }
    // getters
    function getCat(query) {
        if (query === 'all') {
            return store;
        } else {
            let itemData = [];
            let items = store.filter(item => item.category === query);
            items.forEach(item => {
                itemData.push({id: item.id, title: item.title, price: item.price, image: item.image});
            });
            return itemData;
        }
    }
    function getStoreItem(query) {
        const item = store.filter(item => item.id == query);
        return item[0];
    }

    return {
        inStore,
        getCat,
        getStoreItem
    }
};

export default useStore;
