import React from "react";
import * as Scroll from "react-scroll";

const About = () => {
  return (
    <Scroll.Element name="about-me-anchor">
      <div className="about-me-wrapper">
        <div className="about-me__left-container">
          <h1 className="about-me__title">About Me</h1>
          <hr className="about-me__title-separator" />
          <p className="about-me__description">
            If you'd like to contact me, please do so through either LinkedIn,
            or via GitHub.
          </p>
          <ul className="about-me__contact-list">
            <li className="about-me__contact-list-item">
              <i className="fab fa-linkedin" />
              <a
                className="about-me__contact-list-item-link"
                href="https://www.linkedin.com/in/danielagg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="about-me__contact-list-item">
              <i className="fab fa-github" />
              <a
                className="about-me__contact-list-item-link"
                href="https://github.com/danielagg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me__right-container">
          <p className="about-me__description">
            I'm a Hungarian full stack developer, with more than 3 years of
            professional experience, spent in an enterprise environment.
          </p>

          <p className="about-me__description">
            During this time, I acted as the deputy to the Technical Team Lead
            in a SCRUM team of 6-9 devs - my duties included coordinating the
            development of major change requests, completing code reviews and
            offering general architectural and technical guidance.
          </p>

          <p className="about-me__description">
            For a complete list of my experiences and skills, please refer to my
            resumé.
          </p>

          <span>
            <a
              className="sliding-button sliding-button--left-to-right sliding-button--thick-border"
              href="#"
            >
              Download CV (pdf)
            </a>
          </span>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default About;
