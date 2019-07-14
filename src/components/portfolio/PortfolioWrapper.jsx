import React from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioWrapper = () => {
  const workItems = [
    {
      title: "Contact Keeper",
      descHeading:
        "This is a full stack application which keeps track of contact of its users.",
      descParagraph:
        "The MERN stack was used for the application. Passwords are stored securely in MongoDB, using bcrypt. For the frontend's global state management, the Context API was used.",
      background: "#0269A4",
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
      background: "#000000",
      color: "#FFFFFF",
      icon: "fas fa-map-marker-alt",
      viewOnlineLine: "",
      githubLink: ""
    }
  ];

  return (
    <>
      {workItems.map((item, index) => {
        return <PortfolioItem key={index} item={item} />;
      })}
    </>
  );
};

export default PortfolioWrapper;
