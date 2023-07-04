import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/shop/all');
    }, []);

    return (
        <>
            <Outlet />
        </>
    )
};

export default Shop;
