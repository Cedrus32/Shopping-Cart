import fetchData from '../scripts/fetchData';

const useGetCat = (props) => {
    const category = props;
    let data = [];
    const mockFetch = [
        {
            id: 1,
            title: 'item 1',
            price: 100,
            image: 'imageURL',
        },
        {
            id: 2,
            title: 'item 2',
            price: 200,
            image: 'imageURL',
        },
        {
            id: 3,
            title: 'item 3',
            price: 300,
            image: 'imageURL',
        },
    ];

    data = mockFetch;
    // data = fetchData(category);

    return {
        data,
    }
};

export default useGetCat;
