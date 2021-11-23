import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { Carrito } from './Screens/Carrito/Carrito';
import { Home } from './Screens/Home/Home';

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </>
  )
}
