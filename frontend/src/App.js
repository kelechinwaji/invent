import './index.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Create from './pages/Create';
import AllInventories from './pages/AllInventories';
import Home from './pages/Home';
import Layout from "./Layout";


const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path='/create' element={<Create/>} />
        <Route path='/all-Inventories' element={<AllInventories/>} />
        <Route path='/' element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
