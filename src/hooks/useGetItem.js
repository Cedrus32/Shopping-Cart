import { useEffect } from 'react';

// import fetchData from '../scripts/fetchData';

const useGetItem = (props) => {
    const { updateView, id, cartItem } = props;
    let data = {
        id: null,
        title: null,
        description: null,
        price: null,
        count: null,
        image: null,
    };
    const mockFetch = { // TEST: replace with API fetch
        id: parseInt(id),
        title: `item ${id}`,
        description: 'description',
        price: 100 * parseInt(id),
        count: 0,
        image: 'imageURL'
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
        data = mockFetch;
        // data = fetchData(id);
    }

    return {
        exists,
        data,
    }
};

export default useGetItem;
