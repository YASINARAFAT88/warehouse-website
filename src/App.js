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

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Register></Register>}></Route>
       <Route path='/AllStocks/:AllStocksId' element={<AllStocks></AllStocks>}></Route>
       <Route path='/checkout' element={<RequireAuth>
         <CheckOut></CheckOut>
       </RequireAuth>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
