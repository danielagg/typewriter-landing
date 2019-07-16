import React from "react";
import * as Scroll from "react-scroll";

const About = () => {
  return (
    <Scroll.Element name="about-me-anchor">
      <div className="about-me-wrapper">
        <div className="about-me-left-container">
          <h1>About Me</h1>
          <hr className="landing-title-separator" />
          <p className="about-me-description">
            If you'd like to contact me, please do so through either through
            LinkedIn, or via GitHub:
          </p>
          <ul>
            <li>
              <i class="fab fa-linkedin" />
              <a
                href="https://www.linkedin.com/in/danielagg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <i class="fab fa-github" />
              <a
                href="https://github.com/danielagg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me-right-container">
          <p className="about-me-description">
            I'm a 23 year old Hungarian full stack developer, with more than 3
            years of professional experience, spent in an enterprise
            environment.
          </p>

          <p className="about-me-description">
            Acted as the deputy to the Technical Team Lead in a team of 6-9
            developers in a SCRUM team (duties included code reviews,
            coordinating the development of major change requests)
          </p>

          <p className="about-me-description">
            For a complete list of my experiences and skills, please see my
            resumé.
          </p>

          <span>
            <a className="sliding-button" href="#">
              Download CV (PDF)
            </a>
          </span>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default About;
