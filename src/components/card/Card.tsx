import React from "react";
import { ICountry } from "../../pages/home/types";
import "./card.scss";

interface ICardProps {
  country: ICountry;
}

const Card = (props: ICardProps) => {
  return (
    <div className="card">
      <img alt="flag" src={props.country.flags.png} />
      <h3>{props.country.name.common}</h3>
    </div>
  );
};

export default Card;
