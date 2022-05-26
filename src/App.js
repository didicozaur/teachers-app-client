import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import AdDetails from "./pages/AdDetails";
import AdList from "./pages/AdList";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import SubjectsPage from "./pages/SubjectsPage";
import AddSubject from "./pages/AddSubject";
import SubjectDetailsPage from "./pages/SubjectDetailsPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AddAd from "./pages/AddAd";
import ProfilePage from "./pages/ProfilePage";
import EditAd from "./pages/EditAd";

function App() {
  const [ads, setAds] = useState([]);
  const [subjects, setSubjects] = useState([]);
  // const [users, setUsers] = useState([]);

  const fetchAds = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/ads`)
      .then((response) => {
        setAds(response.data);
      })
      .catch((err) => console.log("Error getting ads from DB", err));
  };

  // const fetchUsers = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/users`)
  //     .then((response) => {
  //       setUsers(response.data);
  //     })
  //     .catch((err) => console.log("Error getting ads from DB", err));
  // };

  const fetchSubjects = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/subjects`)
      .then((response) => {
        setSubjects(response.data);
      })
      .catch((err) => console.log("Error getting subjects from DB", err));
  };
  useEffect(() => {
    fetchSubjects();
    fetchAds();
    // fetchUsers();
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/subjects"
          element={<SubjectsPage subjects={subjects} />}
        />
        <Route
          path="/subjects/add"
          element={<AddSubject updatePage={fetchSubjects} />}
        />
        <Route path="subjects/:subjectId" element={<SubjectDetailsPage />} />
        <Route path="/ads" element={<AdList ads={ads} />} />
        <Route
          path="/ads/add"
          element={
            <AddAd ads={ads} subjects={subjects} updatePage={fetchAds} />
          }
        />
        <Route
          path="/ads/:adId"
          element={<AdDetails updatePage={fetchAds} />}
        />
        <Route
          path="/ads/:adId/edit"
          element={
            <EditAd ads={ads} subjects={subjects} updatePage={fetchAds} />
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
