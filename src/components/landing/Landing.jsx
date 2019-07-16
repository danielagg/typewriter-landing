import React, { useEffect } from "react";
import TypeWriter from "../../typeWriter.js";
import ThemeSelector from "../ThemeSelector";
import * as Scroll from "react-scroll";

const Landing = () => {
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
    <div className="landing-container">
      <h1 className="landing-typed-title">
        <span className="landing-typed-title__typed" />
      </h1>
      <hr className="title-separator" />
      <p className="landing-description">
        I have experience with React, Redux and Material UI, in regards of
        frontend techs.
      </p>
      <p className="landing-description">
        My backend experience includes Azure, as well as Node and Express - the
        MERN stack.
      </p>

      <ThemeSelector />

      <nav className="landing-navigation">
        <ul>
          <li className="sliding-button sliding-button--thick">
            <Scroll.Link
              activeClass="active"
              to="my-projects-anchor"
              smooth={true}
              duration={450}
            >
              Work <span className="landing-navigation-item-arrow">&rarr;</span>
            </Scroll.Link>
          </li>
          <li className="sliding-button sliding-button--thick">
            <Scroll.Link
              activeClass="active"
              to="about-me-anchor"
              smooth={true}
              duration={600}
            >
              About{" "}
              <span className="landing-navigation-item-arrow">&rarr;</span>
            </Scroll.Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Landing;
