import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = () => {
    const user = useSelector(store => store.user.user);
    // console.log(user);
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;
