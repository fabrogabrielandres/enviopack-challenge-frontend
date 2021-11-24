import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes,
  Route
} from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { loadProducts } from './redux/productsSlice';
import { loadUser } from './redux/userSlice';
import { Carrito } from './Screens/Carrito/Carrito';
import { Catalogo } from './Screens/Catalogo/Catalogo';
import products from "./products.json"
import profile from "./profile.json"
import { SuccessAndError } from './components/SuccessAndError/SuccessAndError';

export const App = () => {
  const dispatch = useDispatch()
  dispatch(loadProducts(products.productos))
  dispatch(loadUser(profile.profile))

  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/succces" element={<SuccessAndError/>}/>
      </Routes>
    </>
  )
}
