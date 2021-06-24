import React, { lazy } from "react";
import "../../App.css";
const Cards = lazy(() => import("../Cards"));
const HeroSection = lazy(() => import("../HeroSection"));
const Footer = lazy(() => import("../Footer"));

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
