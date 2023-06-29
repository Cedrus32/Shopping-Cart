import { useState, useRef, useEffect } from 'react';

// import fetchData from '../scripts/fetchData';

const useGetCat = (props) => {
    const { category, getProducts } = props;
    const catRef = useRef(null);
    const [ data, setData ] = useState([]);

    console.log(catRef, category);

    if (catRef.current !== category) {
        catRef.current = category;
        // let mockFetch = [
        //     {
        //         id: 1,
        //         title: `${category} item 1`,
        //         price: 100,
        //         image: 'imageURL',
        //     },
        //     {
        //         id: 2,
        //         title: `${category} item 2`,
        //         price: 200,
        //         image: 'imageURL',
        //     },
        //     {
        //         id: 3,
        //         title: `${category} item 3`,
        //         price: 300,
        //         image: 'imageURL',
        //     },
        // ];
        // setData(mockFetch);
        let products = getProducts({type: 'category', value: category});
        setData(products);
    }

    useEffect(() => {
        return () => {
            catRef.current = null;
            console.log(catRef.current);
            console.log('**********');
        }
    }, [])

    console.log(data);
    console.log(catRef, category);
    console.log('**********');

    return {
        data,
    }
};

export default useGetCat;
