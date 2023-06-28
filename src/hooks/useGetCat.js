import { useState, useRef, useEffect } from 'react';

// import fetchData from '../scripts/fetchData';

const useGetCat = (props) => {
    const category = props;
    const catRef = useRef(null);
    const [ data, setData ] = useState([]);
    // let data = [];
    let mockFetch = [];

    console.log(catRef.current, category);

    if (catRef.current !== category) {
        catRef.current = category;
        mockFetch = [
            {
                id: 1,
                title: `${catRef.current} item 1`,
                price: 100,
                image: 'imageURL',
            },
            {
                id: 2,
                title: `${catRef.current} item 2`,
                price: 200,
                image: 'imageURL',
            },
            {
                id: 3,
                title: `${catRef.current} item 3`,
                price: 300,
                image: 'imageURL',
            },
        ];
        setData(mockFetch);
        // setData(fetchData(catRef.current));
    }

    useEffect(() => {
        return () => {
            catRef.current = null;
            console.log(catRef.current);
        }
    }, [])

    // data = mockFetch;
    // data = fetchData(category);

    return {
        data,
    }
};

export default useGetCat;
