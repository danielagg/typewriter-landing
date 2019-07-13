import React from "react";
import "./styles/combined.css";

// Components
import ThemeSelector from "./components/ThemeSelector";
import Landing from "./components/landing/Landing";
import PortoflioWrapper from "./components/portfolio/PortfolioWrapper";

function App() {
  return (
    <>
      <ThemeSelector />
      <Landing />
      <PortoflioWrapper />
    </>
  );
}

export default App;
