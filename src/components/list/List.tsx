import React, { useState, useEffect } from "react";
import axios from "axios";
import { ICountry } from "../../pages/home/types";
import Card from "../card/Card";
import "./list.scss";

interface IListProps {
  data: ICountry[];
}

const List = ({ data }: IListProps) => {
  console.log(data);
  return (
    <div className="container">
      {data.map((country) => (
        <Card key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default List;
