import { useEffect, useContext } from 'react';

import { StoreContext } from '../contexts/StoreContext';

const useGetItem = (props) => {
    const { updateView, id, cartItem } = props;
    const { store } = useContext(StoreContext);
    let data = {
        id: null,
        title: null,
        description: null,
        price: null,
        count: null,
        image: null,
    };
    let exists;

    useEffect(() => {
        updateView({type: 'id', value: id});
        return () => {
            updateView({type: 'reset', value: null});
        }
    }, []);

    if (cartItem) {
        exists = true;
        data = cartItem;
    } else {
        exists = false;
        let item = store.filter(item => item.id == id);
        data = item[0];
    }

    return {
        exists,
        data,
    }
};

export default useGetItem;
