import React from "react";

const PortfolioItemDescription = props => {
  const { item, nextClickEmitEvent, prevClickEmitEvent } = props;
  const {
    title,
    descSubHeading,
    descParagraph,
    viewOnlineLine,
    githubLink
  } = item;

  return (
    <div className="portfolio-item__description-container">
      <ul className="portfolio-item__navigation">
        <li className="portfolio-item__navigation-list-item">
          <button
            className="sliding-button sliding-button--right-to-left sliding-button--no-border"
            onClick={nextClickEmitEvent}
          >
            &larr;
          </button>
        </li>
        <li className="portfolio-item__navigation-list-item">
          <button
            className="sliding-button sliding-button--left-to-right sliding-button--no-border"
            onClick={prevClickEmitEvent}
          >
            &rarr;
          </button>
        </li>
      </ul>

      <div>
        <h1 className="portfolio-item__title">{title}</h1>
        <h2 className="portfolio-item__sub-heading">{descSubHeading}</h2>
        <p className="portfolio-item__desc">{descParagraph}</p>

        <ul className="portfolio-item__view-more-list">
          <li className="portfolio-item__view-more-list-item">
            <a
              className="sliding-button sliding-button--left-to-right sliding-button--thick-border"
              href={viewOnlineLine}
            >
              Visit app
            </a>
          </li>
          <li className="portfolio-item__view-more-list-item portfolio-item__view-more-list-item--github">
            <i className="fab fa-github" />
            <a className="portfolio-item__github-link" href={githubLink}>
              View source on GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioItemDescription;
