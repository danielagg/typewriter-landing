import React from "react";
import PropTypes from "prop-types";

const PortfolioItem = props => {
  const { item } = props;
  const {
    title,
    descHeading,
    descParagraph,
    background,
    color,
    icon,
    viewOnlineLine,
    githubLink
  } = item;

  return (
    <div style={{ background: background }}>
      <div className="portfolio-item-wrapper">
        <span>
          <i
            className={"portfolio-item-icon " + icon}
            style={{ color: color }}
          />
        </span>
        <div>
          <h1 className="portfolio-item-title" style={{ color: color }}>
            {title}
          </h1>
          <h2 className="portfolio-item-sub-title" style={{ color: color }}>
            {descHeading}
          </h2>
          <p className="portfolio-item-desc" style={{ color: color }}>
            {descParagraph}
          </p>

          <ul>
            <li>
              <a href={viewOnlineLine}>View Online</a>{" "}
            </li>
            <li>
              <a href={githubLink}>GitHub</a>{" "}
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
