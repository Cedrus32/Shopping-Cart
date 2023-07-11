import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate();
    const path = useLocation().pathname;

    useEffect(() => {
        if (path === '/shop') {
            navigate('/shop/all');
        }
    }, [path]);

    return (
        <>
            <Outlet />
        </>
    )
};

export default Shop
