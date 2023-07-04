import { useState, useRef, useEffect, useContext } from 'react';

import { StoreContext } from '../contexts/StoreContext';

const useGetCat = (props) => {
    const category = props;
    const catRef = useRef(null);
    const [ data, setData ] = useState([]);
    const { store } = useContext(StoreContext);

    if (catRef.current !== category && store.length !== 0) {
        catRef.current = category;
        if (category === 'all') {
            setData(store);
        } else {
            let itemData = [];
            let items = store.filter(item => item.category === category);
            items.forEach(item => {
                itemData.push({id: item.id, title: item.title, price: item.price, image: item.image});
            });
            setData(itemData);
        }
    }

    useEffect(() => {
        return () => {
            catRef.current = null;
        }
    }, []);

    return {
        data,
    }
};

export default useGetCat;
