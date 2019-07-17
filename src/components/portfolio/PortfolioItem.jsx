import React from "react";
import PropTypes from "prop-types";

// Components
import PortfolioItemImage from "./PortfolioItemImage";
import PortfolioItemDescription from "./PortfolioItemDescription";

const PortfolioItem = props => {
  const { item, nextClickEmitEvent, prevClickEmitEvent } = props;

  return (
    <div className="portfolio-items">
      <div className="portfolio-items__container">
        <PortfolioItemImage item={item} />
        <PortfolioItemDescription
          item={item}
          nextClickEmitEvent={nextClickEmitEvent}
          prevClickEmitEvent={prevClickEmitEvent}
        />
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default PortfolioItem;
