import React from "react";
import * as Scroll from "react-scroll";
import PortfolioItem from "./PortfolioItem";

const PortfolioWrapper = () => {
  const workItems = [
    {
      title: "Guitar Store",
      descHeading:
        "This is a full stack application which keeps track of contact of its users.",
      descParagraph:
        "The MERN stack was used for the application. Passwords are stored securely in MongoDB, using bcrypt. For the frontend's global state management, the Context API was used.",
      background: "#d7ffbd",
      icon: "fas fa-shopping-basket",
      viewOnlineLine: "",
      githubLink: ""
    },
    {
      title: "Contact Keeper",
      descHeading:
        "This is a full stack application which keeps track of contact of its users.",
      descParagraph:
        "The MERN stack was used for the application. Passwords are stored securely in MongoDB, using bcrypt. For the frontend's global state management, the Context API was used.",
      background: "#bdceff",
      icon: "fas fa-address-card",
      viewOnlineLine: "",
      githubLink: ""
    },
    {
      title: "Personal site",
      descHeading:
        "This very website, a simple, serverless React App running on Zeit.",
      descParagraph:
        "A fairly static site (no backend, no global state on frontend), deployed to Zeit, via Continuous Delivery.",
      background: "#ffbdeb",
      icon: "fas fa-map-marker-alt",
      viewOnlineLine: "",
      githubLink: ""
    }
  ];

  return (
    <>
      <Scroll.Element name="my-projects-anchor">
        <div className="portfolio-wrapper-outer-container">
          <div className="portfolio-wrapper-inner-container">
            {workItems.map((item, index) => {
              return <PortfolioItem key={index} item={item} />;
            })}
          </div>
        </div>
      </Scroll.Element>
    </>
  );
};

export default PortfolioWrapper;
