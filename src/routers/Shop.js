import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate();
    const path = useLocation().pathname;

    useEffect(() => {
        if (path === '/shop' || path === '/shop/') {
            navigate('/shop/all');
        }
    }, [path, navigate]);

    return (
        <>
            <Outlet />
        </>
    )
};

export default Shop
