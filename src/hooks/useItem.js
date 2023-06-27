import { useEffect } from 'react';

const useItem = (props) => {
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

    useEffect(() => {
        updateView(id);
    }, []);

    let exists;
    if (cartItem) {
        exists = true;
        data = cartItem;
    } else {
        exists = false;
        data = mockFetch;
    }

    return {
        exists,
        data,
    }
};

export default useItem;
