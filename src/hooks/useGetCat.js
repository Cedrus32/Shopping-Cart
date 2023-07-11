import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { StoreContext } from '../contexts/StoreContext';

const useGetCat = () => {
    const { category } = useParams();
    const { store } = useContext(StoreContext);
    let data;

    if (category === 'all') {
        data = store;
    } else {
        let itemData = [];
        let items = store.filter(item => item.category === category);
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
