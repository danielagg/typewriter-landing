import React from "react";
import PropTypes from "prop-types";

const PortfolioItem = props => {
  const { item, nextClickEmitEvent, prevClickEmitEvent } = props;
  const {
    title,
    descSubHeading,
    descParagraph,
    icon,
    background,
    viewOnlineLine,
    githubLink
  } = item;

  return (
    <div className="portfolio-items-wrapper">
      <div className="portfolio-item-container">
        <span
          className="portfolio-item-icon-container"
          style={{ background: background }}
        >
          <i className={"portfolio-item-icon " + icon} />
        </span>
        <div className="portfolio-item-description-container">
          <ul className="portfolio-item-navigation">
            <li>
              <button
                className="sliding-button sliding-button--no-border"
                onClick={nextClickEmitEvent}
              >
                &larr;
              </button>
            </li>
            <li>
              <button
                className="sliding-button sliding-button--no-border"
                onClick={prevClickEmitEvent}
              >
                &rarr;
              </button>
            </li>
          </ul>

          <h1 className="portfolio-item-title">{title}</h1>
          <h2 className="portfolio-item-sub-heading">{descSubHeading}</h2>
          <p className="portfolio-item-desc">{descParagraph}</p>

          <ul className="portfolio-item-links-list">
            <li className="portfolio-item-links-list-item">
              <a
                className="sliding-button sliding-button--thick"
                href={viewOnlineLine}
              >
                View Online
              </a>
            </li>
            <li className="portfolio-item-links-list-item">
              <a
                className="sliding-button sliding-button--thick"
                href={githubLink}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default PortfolioItem;
