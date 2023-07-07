import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    navigate('/');
};

export default NotFound;
