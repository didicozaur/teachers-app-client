
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import AdDetails from './pages/AdDetails';
import AdList from './pages/AdList';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  const [ads, setAds] = useState([]);

  const fetchAds = () => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/ads`)
      .then((response) => {
        setAds(response.data);
      })
      .catch((err) => console.log("Error getting ads from DB", err));
  }, []);}


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/ads" element={ <AdList ads={ads}/> }/>
        <Route path="/ads/:adId" element={<AdDetails adId={adId} />} updatePage={fetchAds}/>
      </Routes>
     

      <Footer />
    </>
  );
}

export default App;
