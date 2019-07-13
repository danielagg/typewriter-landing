import React, { useEffect } from "react";
import "./App.css";
import TypeWriter from "./typeWriter.js";

function App() {
  const initializeWriter = () => {
    const textElement = document.querySelector(".landing-typed-title__typed");

    new TypeWriter(
      textElement,
      ["Hi, I'm Dan.", "I'm a full-stack dev."],
      1000
    );
  };

  useEffect(() => {
    initializeWriter();
  }, []);

  return (
    <div class="landing-container">
      <h1 class="landing-typed-title">
        <span class="landing-typed-title__typed" />
      </h1>
      <hr class="landing-title-separator" />
      <p class="landing-description">
        I have experience with React, Redux and Material UI, in regards of
        frontend techs.
      </p>
      <p class="landing-description">
        My backend experience includes Azure, as well as Node and Express - the
        MERN stack.
      </p>

      <nav class="landing-navigation">
        <ul>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
