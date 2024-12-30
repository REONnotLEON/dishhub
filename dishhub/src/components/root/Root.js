import React from 'react';
import Header from '../header/Header';
import { Outlet,useLocation } from 'react-router-dom';

export default function Root(){

    const location = useLocation();

    const hideHeaderRoutes = ["/auth"]

    return (
        <>
          {!hideHeaderRoutes.includes(location.pathname) && <Header />}
          <Outlet />
        </>
    )
}