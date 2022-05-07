import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AllStocks from './components/AllStocks/AllStocks';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import NotFound from './components/Shared/NotFound/NotFound';
import Register from './components/Login/Register/Register'
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import CheckOut from './components/CheckOut/CheckOut/CheckOut';
import { createContext, useEffect, useState } from 'react';
import ManageInventory from './components/ManageInventory/ManageInventory';
import AddStock from './components/AddStock/AddStock';

export const HooksContext = createContext('data')


function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setStocks(data))
  },[])
  return (
    <div>
      <Header></Header>
      <HooksContext.Provider value={stocks}>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Register></Register>}></Route>
       <Route path='/AllStocks/:AllStocksId' element={
       <RequireAuth>
       <AllStocks></AllStocks>
       </RequireAuth>}></Route>
       <Route path='/checkout' element={<RequireAuth>
         <CheckOut></CheckOut>
       </RequireAuth>}></Route>
       <Route path='/manageinventory' element={<RequireAuth>
         <ManageInventory></ManageInventory>
       </RequireAuth>}></Route>
       <Route path='/addstock' element={<RequireAuth>
         <AddStock></AddStock>
       </RequireAuth>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     </HooksContext.Provider>
     <Footer></Footer>
    </div>
  );
}

export default App;
