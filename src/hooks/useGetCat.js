import { useState, useRef, useEffect, useContext } from 'react';

import { StoreContext } from '../contexts/StoreContext';

const useGetCat = (props) => {
    const category = props;
    const catRef = useRef(null);
    const [ data, setData ] = useState([]);
    const { store } = useContext(StoreContext);

    if (catRef.current !== category) {
        catRef.current = category;
        
        let items = store.filter(item => item.category === category);
        let data = [];
        items.forEach(item => {
            data.push({id: item.id, title: item.title, price: item.price, image: item.image});
        })
        setData(data);
    }

    useEffect(() => {
        return () => {
            catRef.current = null;
        }
    }, [])

    return {
        data,
    }
};

export default useGetCat;
