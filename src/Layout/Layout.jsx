import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';

const Layout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
            
        </>
    );
};

export default Layout;