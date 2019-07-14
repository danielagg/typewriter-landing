import React from "react";
import "./styles/combined.css";
import { CookiesProvider } from "react-cookie";

// Components
import Landing from "./components/landing/Landing";
import PortoflioWrapper from "./components/portfolio/PortfolioWrapper";
import About from "./components/about/About";

function App() {
  return (
    <>
      <CookiesProvider>
        <Landing />
        {/* <PortoflioWrapper /> */}
        <About />
      </CookiesProvider>
    </>
  );
}

export default App;
