import React from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioWrapper = () => {
  const workItems = [
    {
      title: "Contact Keeper",
      descHeading:
        "This is a full stack application which keeps track of contact of its users. Visitors are able to register (the passwords are securely stored using bcrypt in MongoDB). This needs another sentence here.",
      descParagraph:
        "This is an application is using the MERN stack. The frontend is built with React (using the Context API for global state management). The backend is an ExpressJS application, connecting to MongoDB.",
      background: "#0269A4",
      color: "#FFFFFF",
      icon: "fas fa-address-card",
      viewOnlineLine: "",
      githubLink: ""
    },
    {
      title: "This site",
      descHeading:
        "This is a full stack application which keeps track of contact of its users. Visitors are able to register (the passwords are securely stored using bcrypt in MongoDB). This needs another sentence here.",
      descParagraph:
        "This is an application is using the MERN stack. The frontend is built with React (using the Context API for global state management). The backend is an ExpressJS application, connecting to MongoDB.",
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
