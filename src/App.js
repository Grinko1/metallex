import './App.css';
import { Route, Routes } from 'react-router';
import Main from './Pages/Main/Main';
import Layout from './Layout/Layout';
import Catalog from './Pages/Catalog/Catalog';
import Price from './Pages/Price/Price';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Main/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Route>
      

    </Routes>
   
  );
}

export default App;
