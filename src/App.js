import './App.css';
import { Route, Routes, useLocation } from 'react-router';
import Main from './Pages/Main/Main';
import Layout from './Layout/Layout';
import Catalog from './Pages/Catalog/Catalog';
import Price from './Pages/Price/Price';
import Contacts from './Pages/Contacts/Contacts';
import { useLayoutEffect } from 'react';

function App() {
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 
  
  return (
    <Wrapper>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Main/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Route>
      

    </Routes>
    </Wrapper>
   
  );
}

export default App;
