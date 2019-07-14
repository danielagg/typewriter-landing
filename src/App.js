import React from "react";
import "./styles/combined.css";

// Components
import Landing from "./components/landing/Landing";
import PortoflioWrapper from "./components/portfolio/PortfolioWrapper";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Landing />
      <PortoflioWrapper />
      <About />
    </>
  );
}

export default App;
