import React, { useState } from "react";
import * as Scroll from "react-scroll";
import PortfolioItem from "./PortfolioItem";
import Colors from "./Colors";

const PortfolioWrapper = () => {
  const workItems = [
    {
      id: 0,
      title: "Furniture Store",
      descSubHeading:
        "Dockerized ASP.NET Core backend, using PostgreSQL, with a React + Redux frontend.",
      descParagraph:
        "A hobby project for a webshop of an imaginery furniture store. Using .NET Core 3 preview, connecting to a PostgreSQL database with Entity Framework Core. The frontend is a React application, using Redux for its global state management.",
      colorType: Colors.GREEN,
      icon: "fas fa-shopping-basket",
      viewOnlineLine: "",
      githubLink: ""
    },
    {
      id: 1,
      title: "Contact Keeper",
      descSubHeading: "A contact-storing app, using the MERN stack.",
      descParagraph:
        "The MERN stack was used for the application. Passwords are stored securely in MongoDB, using bcrypt. For the frontend's global state management, the Context API was used.",
      colorType: Colors.BLUE,
      icon: "fas fa-address-card",
      viewOnlineLine: "",
      githubLink: ""
    },
    {
      id: 2,
      title: "Personal site",
      descSubHeading: "This very website.",
      descParagraph:
        "A serverless, stateless React application, deployed to Zeit via Continuous Delivery.",
      colorType: Colors.PURPLE,
      icon: "fas fa-map-marker-alt",
      viewOnlineLine: "",
      githubLink: ""
    }
  ];

  const [selectedItem, setSelectedItem] = useState(workItems[0]);

  const onClickNext = () => {
    const nextItemId = selectedItem.id + 1;
    if (workItems.length > nextItemId) {
      setSelectedItem(workItems[nextItemId]);
    } else {
      setSelectedItem(workItems[0]);
    }
  };

  const onClickPrev = () => {
    const nextItemId = selectedItem.id - 1;
    if (nextItemId >= 0) {
      setSelectedItem(workItems[nextItemId]);
    } else {
      setSelectedItem(workItems[workItems.length - 1]);
    }
  };

  return (
    <>
      <Scroll.Element name="my-projects-anchor">
        <PortfolioItem
          key={selectedItem.id}
          item={selectedItem}
          nextClickEmitEvent={onClickNext}
          prevClickEmitEvent={onClickPrev}
        />
      </Scroll.Element>
    </>
  );
};

export default PortfolioWrapper;
