import React from "react";

const About = () => {
  return (
    <div className="about-me-wrapper">
      <div className="about-me-left-container">
        <h1>About Me</h1>
        <hr className="landing-title-separator" />
        <p className="about-me-description">
          Morbi est nulla, tincidunt eu hendrerit eget, maximus id velit. Nunc
          porta venenatis nunc, vitae.
        </p>
        <span>
          <a href="#">Download CV</a>
        </span>
      </div>
      <div className="about-me-right-container">
        <p className="about-me-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est
          nulla, tincidunt eu hendrerit eget, maximus id velit. Nunc porta
          venenatis nunc, vitae cursus mi bibendum et.
        </p>

        <p className="about-me-description">
          Proin nec purus sed nisl feugiat placerat. Proin quis ultrices quam.
          Sed id eros molestie, laoreet quam at, sodales libero. Etiam faucibus
          enim vel nisl imperdiet viverra. Vivamus aliquet nibh nec lacus
          sagittis, in tempus urna sagittis. Nullam nec volutpat arcu.
        </p>

        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
