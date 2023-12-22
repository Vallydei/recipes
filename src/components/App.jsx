import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Navbar from './ui/Navbar';
import MainPage from './pages/MainPage';
import Login from './pages/LogIn';
import AccountPage from './pages/AccountPage';

export default function App({mapedRecipes, user, favoriteRecipes}) {
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<MainPage mapedRecipes={mapedRecipes} user={user} />} />
        <Route path="/account/:id" element={<AccountPage user={user} mapedRecipes={mapedRecipes} favoriteRecipes={favoriteRecipes} />} />
      </Routes>
    </>
  );
}
