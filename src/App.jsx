import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "././page/home/HomePage";
import LoginPage from "./page/Login/LoginPage";
import SignupPage from "./page/SignUp/SignupPage";
import FrancePrepa from "./page/home/FrancePrepa";
import Contact from "./page/home/Contact";
import EtudesInternationales from "./page/home/EtudesInternationales";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* ROUTES VERS LES PAGSE DU SITE */}
          <Route path="/" element={<HomePage />} /> {/*Accueil*/}
          <Route path="a-propos" element={<FrancePrepa />} />{" "}
          {/*France Prépa*/}
          <Route
            path="etudes-internationales"
            element={<EtudesInternationales />}
          />{" "}
          {/*France Prépa*/}
          <Route path="/contact" element={<Contact />} /> {/*Contact*/}
          <Route path="/login" element={<LoginPage />} /> {/*Connexion*/}
          <Route path="/signup" element={<SignupPage />} /> {/*Inscription*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
