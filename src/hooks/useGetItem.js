import { useParams } from 'react-router-dom';

import useCart from '../hooks/useCart';
import useStore from '../hooks/useStore';

const useGetItem = () => {
    const { id } = useParams();
    const { inStore, getStoreItem } = useStore();
    const { addItem, removeItem, updateItem, inCart, getCartItem } = useCart();
    let data;
    let exists = {inCart: null, inStore: null};

    exists.inCart = inCart(id);
    if (!exists.inCart) {
        exists.inStore = inStore(id);
        if (exists.inStore) {
            data = getStoreItem(id);
        }
    } else {
        exists.inStore = true;
        data = getCartItem(id);
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
