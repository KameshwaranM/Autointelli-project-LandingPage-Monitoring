import React from "react";
import "./home.css";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </>
  );
};

export default Home;
