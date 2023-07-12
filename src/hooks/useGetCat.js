import { useParams } from 'react-router-dom';

import useStore from '../hooks/useStore';

const useGetCat = () => {
    const { category } = useParams();
    const { getCat } = useStore();
    let data = getCat(category);

    return {
        data,
    }
};

export default useGetCat;
