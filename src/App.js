
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import AdList from './pages/AdList';


function App() {

  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/ads`)
      .then((response) => {
        setAds(response.data);
      })
      .catch((err) => console.log("Error getting ads from DB", err));
  }, []);


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/ads" element={ <AdList ads={ads}/> }/>
      </Routes>
     

      <Footer />
    </>
  );
}

export default App;
