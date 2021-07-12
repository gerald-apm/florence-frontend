/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__pic-wrap">
            <h1 className="value-display">{props.value}</h1>
          </div>
          <div className="cards__item__info">
            <h1 className="cards__item__text">{props.text}</h1>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
