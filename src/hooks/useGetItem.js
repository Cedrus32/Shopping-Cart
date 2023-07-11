import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import useCart from '../hooks/useCart';

import { StoreContext } from '../contexts/StoreContext';

const useGetItem = () => {
    const { id } = useParams();
    const { store } = useContext(StoreContext);
    const { addItem, removeItem, updateItem, itemExists, getItem } = useCart();
    const exists = itemExists(id);
    let data;

    if (exists) {
        data = getItem(id);
    } else {
        let item = store.filter(item => item.id == id);
        data = item[0];
    }

    return {
        exists,
        data,
        updateItem,
        removeItem,
        addItem,
    }
};

export default useGetItem;
