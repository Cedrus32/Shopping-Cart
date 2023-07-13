import { useParams } from 'react-router-dom';

import useCart from '../hooks/useCart';
import useStore from '../hooks/useStore';

const useGetItem = () => {
    const { id } = useParams();
    const { inStore, getStoreItem } = useStore();
    const { inCart, getCartItem } = useCart(); // NOTE: move method imports to item-action component
    let exists = {inCart: null, inStore: null};
    let data;

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
    }
};

export default useGetItem;
