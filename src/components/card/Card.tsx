import React from "react";
import { ICountry } from "../../pages/home/types";
import "./card.scss";
import { Link } from "react-router-dom";

interface ICardProps {
  country: ICountry;
}

const Card = (props: ICardProps) => {
  return (
    <Link to={props.country.name.common}>
      <div className="card">
        <img alt="flag" src={props.country.flags.png} />
        <h3>{props.country.name.common}</h3>
      </div>
    </Link>
  );
};

export default Card;
