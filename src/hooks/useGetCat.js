import { useContext } from 'react';

import { StoreContext } from '../contexts/StoreContext';

const useGetCat = (props) => {
    const view = props.toLowerCase();
    const { store } = useContext(StoreContext);
    let data;

    if (view === 'all') {
        data = store;
    } else {
        let itemData = [];
        let items = store.filter(item => item.category === view);
        items.forEach(item => {
            itemData.push({id: item.id, title: item.title, price: item.price, image: item.image});
        });
        data = itemData;
    }

    return {
        data,
    }
};

export default useGetCat;
