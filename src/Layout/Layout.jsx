import React, { memo} from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';


const Layout = memo( () => {

    return (
        <>
        <Header/>
        <div>
             <Outlet/> 

        </div>
      
        <Footer/>
            
        </>
    );
});

export default Layout;