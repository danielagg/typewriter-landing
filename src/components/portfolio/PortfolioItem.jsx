import React from "react";
import PropTypes from "prop-types";
import Colors from "./Colors";

const PortfolioItem = props => {
  const { item, nextClickEmitEvent, prevClickEmitEvent } = props;
  const {
    title,
    descSubHeading,
    descParagraph,
    icon,
    colorType,
    viewOnlineLine,
    githubLink
  } = item;

  const getConvertedColorCssClassName = () => {
    return colorType.toLowerCase();
  };

  return (
    <div className="portfolio-items-wrapper">
      <div className="portfolio-item-container">
        <span
          className={
            "portfolio-item-icon-container portfolio-item-icon-container--" +
            getConvertedColorCssClassName()
          }
        >
          <i className={"portfolio-item-icon " + icon} />
        </span>
        <div className="portfolio-item-description-container">
          <ul className="portfolio-item-navigation">
            <li>
              <button
                className="sliding-button sliding-button--right-to-left sliding-button--no-border"
                onClick={nextClickEmitEvent}
              >
                &larr;
              </button>
            </li>
            <li>
              <button
                className="sliding-button sliding-button--left-to-right sliding-button--no-border"
                onClick={prevClickEmitEvent}
              >
                &rarr;
              </button>
            </li>
          </ul>

          <div>
            <h1 className="portfolio-item-title">{title}</h1>
            <h2 className="portfolio-item-sub-heading">{descSubHeading}</h2>
            <p className="portfolio-item-desc">{descParagraph}</p>

            <ul className="portfolio-item-links-list">
              <li className="portfolio-item-links-list-item">
                <a
                  className="sliding-button sliding-button--left-to-right sliding-button--thick-border"
                  href={viewOnlineLine}
                >
                  Visit app
                </a>
              </li>
              <li className="portfolio-item-links-list-item portfolio-item-links-list-item--github">
                <i className="fab fa-github" />
                <a className="portfolio-item-github-link" href={githubLink}>
                  View source on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default PortfolioItem;
