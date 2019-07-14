import React from "react";
import * as Scroll from "react-scroll";
import PortfolioItem from "./PortfolioItem";

const PortfolioWrapper = () => {
  const workItems = [
    {
      title: "Contact Keeper",
      descHeading:
        "This is a full stack application which keeps track of contact of its users.",
      descParagraph:
        "The MERN stack was used for the application. Passwords are stored securely in MongoDB, using bcrypt. For the frontend's global state management, the Context API was used.",
      background: "#B22AF6",
      color: "#FFFFFF",
      icon: "fas fa-address-card",
      viewOnlineLine: "",
      githubLink: ""
    },
    {
      title: "Museum",
      descHeading:
        "This is a full stack application which keeps track of contact of its users.",
      descParagraph:
        "The MERN stack was used for the application. Passwords are stored securely in MongoDB, using bcrypt. For the frontend's global state management, the Context API was used.",
      background: "#D01A57",
      color: "#FFFFFF",
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
      background: "#50DBC4",
      color: "#FFFFFF",
      icon: "fas fa-map-marker-alt",
      viewOnlineLine: "",
      githubLink: ""
    }
  ];

  return (
    <>
      <Scroll.Element name="my-projects-anchor">
        {workItems.map((item, index) => {
          return <PortfolioItem key={index} item={item} />;
        })}
      </Scroll.Element>
    </>
  );
};

export default PortfolioWrapper;
