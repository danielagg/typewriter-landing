import React from "react";

const PortfolioItemImage = props => {
  const { item } = props;
  const { icon, colorType } = item;

  const getConvertedColorCssClassName = () => {
    return colorType.toLowerCase();
  };

  return (
    <div
      className={
        "portfolio-items__icon-container portfolio-items__icon-container--" +
        getConvertedColorCssClassName()
      }
    >
      <i className={"portfolio-item__icon " + icon} />
    </div>
  );
};

export default PortfolioItemImage;
