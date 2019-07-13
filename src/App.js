import React from "react";
import "./styles/combined.css";
import Landing from "./components/landing/Landing";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  return (
    <>
      <ThemeSelector />
      <Landing />
    </>
  );
}

export default App;
