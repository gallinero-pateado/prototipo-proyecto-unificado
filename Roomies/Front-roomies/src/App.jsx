import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from './NavComponents/Layout';
import Layout2 from './NavComponents/Layout2'
import RegisterRoomie from './RegisterComponents/RegisterRoomie';
import PageProfile from './ProfileComponents/ProfilePage';
import FavPage from './FavComponents/FavPage'
import Messpage from './MessagueComponents/MessPage'
import MainPage from './mainpage'; // Importa el componente principal con opciones
import RoomiesList from './RoomiesComponents/Roomies'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/*Rutas para el primer Layout*/}
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/register" element={<RegisterRoomie />} />
          <Route  index element={<RegisterRoomie />} />
      </Route>

    
      <Route path="/" element={<Layout2 />}>
        <Route path="/profile" element={  <PageProfile /> } /> 
        <Route path="fav" element={<FavPage />} />
        <Route path="roomies" element={<RoomiesList />} />
        <Route path="my-messages" element={<Messpage />} />
      </Route>
       

        {/*Redirecciona al main pague para elegir servicio */}
      <Route path="main" element={<MainPage />} />
      
    </Routes>
    </Router>
  )

}

export default App
