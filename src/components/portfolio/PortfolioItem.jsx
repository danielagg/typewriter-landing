import React from "react";
import PropTypes from "prop-types";

const PortfolioItem = props => {
  const { item } = props;
  const {
    title,
    descHeading,
    descParagraph,
    icon,
    background,
    viewOnlineLine,
    githubLink
  } = item;

  return (
    <div style={{ background: background }}>
      <div className="portfolio-item-outer-container">
        <div className="portfolio-item-container">
          <span>
            <i className={"portfolio-item-icon " + icon} />
          </span>
          <div className="portfolio-item-description-container">
            <h1 className="portfolio-item-title">{title}</h1>
            <h2 className="portfolio-item-sub-title">{descHeading}</h2>
            <p className="portfolio-item-desc">{descParagraph}</p>

            <ul className="portfolio-item-links-list">
              <li className="portfolio-item-links-list-item">
                <a className="sliding-button" href={viewOnlineLine}>
                  View Online
                </a>
              </li>
              <li className="portfolio-item-links-list-item">
                <a className="sliding-button" href={githubLink}>
                  GitHub
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
