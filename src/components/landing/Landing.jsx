import React, { useEffect } from "react";
import TypeWriter from "../../typeWriter.js";
import ThemeSelector from "../ThemeSelector";
import * as Scroll from "react-scroll";

const Landing = () => {
  const initializeWriter = () => {
    const textElement = document.querySelector(
      ".landing__typed-title_programatically_written"
    );

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
    <div className="landing__container">
      <h1 className="landing__typed-title">
        <span className="landing__typed-title_programatically_written" />
      </h1>
      <hr className="landing__title-separator" />
      <p className="landing__description">
        I have experience with React, Redux and Material UI, in regards of
        frontend techs.
      </p>
      <p className="landing__description">
        My backend experience includes Azure, as well as Node and Express - the
        MERN stack.
      </p>

      <ThemeSelector />

      <nav className="landing__navigation">
        <ul className="landing__navigation-list">
          <Scroll.Link
            activeClass="active"
            to="my-projects-anchor"
            smooth={true}
            duration={450}
          >
            <li className="sliding-button sliding-button--left-to-right sliding-button--thick-border">
              Work{" "}
              <span className="landing__navigation-item-arrow">&rarr;</span>
            </li>
          </Scroll.Link>

          <Scroll.Link
            activeClass="active"
            to="about-me-anchor"
            smooth={true}
            duration={600}
          >
            <li className="sliding-button sliding-button--left-to-right sliding-button--thick-border">
              About{" "}
              <span className="landing__navigation-item-arrow">&rarr;</span>
            </li>
          </Scroll.Link>
        </ul>
      </nav>
    </div>
  );
};

export default Landing;
