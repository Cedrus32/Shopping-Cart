import { useEffect, useContext } from 'react';

import { ViewContext } from '../contexts/ViewContext';
import { StoreContext } from '../contexts/StoreContext';

const useGetItem = (props) => {
    const { setView, cartItem, id } = props;
    console.log(setView);
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
        setView(id);
        return () => {
            setView(null);
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
