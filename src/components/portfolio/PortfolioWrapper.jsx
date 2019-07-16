import React, { useState } from "react";
import * as Scroll from "react-scroll";
import PortfolioItem from "./PortfolioItem";

const PortfolioWrapper = () => {
  const workItems = [
    {
      id: 0,
      title: "Guitar Store",
      descSubHeading:
        "A fairly static site (no backend, no global state on frontend), deployed to Zeit, via Continuous Delivery.",
      descParagraph:
        "The MERN stack was used for the application. Passwords are stored securely in MongoDB, using bcrypt. For the frontend's global state management, the Context API was used.",
      background: "#d7ffbd",
      icon: "fas fa-shopping-basket",
      viewOnlineLine: "",
      githubLink: ""
    },
    {
      id: 1,
      title: "Contact Keeper",
      descSubHeading:
        "A fairly static site (no backend, no global state on frontend), deployed to Zeit, via Continuous Delivery.",
      descParagraph:
        "The MERN stack was used for the application. Passwords are stored securely in MongoDB, using bcrypt. For the frontend's global state management, the Context API was used.",
      background: "#bdceff",
      icon: "fas fa-address-card",
      viewOnlineLine: "",
      githubLink: ""
    },
    {
      id: 2,
      title: "Personal site",
      descSubHeading:
        "A fairly static site (no backend, no global state on frontend), deployed to Zeit, via Continuous Delivery.",
      descParagraph:
        "A fairly static site (no backend, no global state on frontend), deployed to Zeit, via Continuous Delivery.",
      background: "#ffbdeb",
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
