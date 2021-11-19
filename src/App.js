import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { Home } from './Screens/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
