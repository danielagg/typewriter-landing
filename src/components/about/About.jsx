import React from "react";
import * as Scroll from "react-scroll";

const About = () => {
  return (
    <Scroll.Element name="about-me-anchor">
      <div className="about-me-wrapper">
        <div className="about-me-left-container">
          <h1>About Me</h1>
          <hr className="title-separator" />
          <p className="about-me-description">
            If you'd like to contact me, please do so through either LinkedIn,
            or via GitHub.
          </p>
          <ul className="about-me-contact-list">
            <li className="about-me-contact-list-item">
              <i className="fab fa-linkedin" />
              <a
                href="https://www.linkedin.com/in/danielagg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="about-me-contact-list-item">
              <i className="fab fa-github" />
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
            I'm a Hungarian full stack developer, with more than 3 years of
            professional experience, spent in an enterprise environment.
          </p>

          <p className="about-me-description">
            During this time, I acted as the deputy to the Technical Team Lead
            in a SCRUM team of 6-9 devs - my duties included coordinating the
            development of major change requests, completing code reviews and
            offering general architectural and technical guidance.
          </p>

          <p className="about-me-description">
            For a complete list of my experiences and skills, please refer to my
            resumé.
          </p>

          <span>
            <a className="sliding-button sliding-button--thick" href="#">
              Download CV (pdf)
            </a>
          </span>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default About;
