import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';

import SignUp from './components/SignUp';

import PrivateRoute from './components/PrivateComponent';


import Login from './components/Login';

import AddProduct from './components/AddProduct';

import ProductList from './components/ProductsList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<PrivateRoute/>} >
        <Route path = "/" element = {<ProductList/>} />
        <Route path = "/add" element = {<AddProduct/>} />
        <Route path = "/update" element = {<h1>Update Product Component</h1>} />
        <Route path = "/logout" element = {<h1>LogOut Component</h1>} />
        <Route path = "/profile" element = {<h1>Profile Component</h1>} />
        </Route>


        <Route path = "/SignUp" element = {<SignUp/>} />
        <Route path = "/Login" element = {<Login/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
