import './App.css';
import { Route, Routes } from 'react-router';
import Main from './Pages/Main/Main';
import Layout from './Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Main/>}/>
      </Route>
      

    </Routes>
   
  );
}

export default App;
