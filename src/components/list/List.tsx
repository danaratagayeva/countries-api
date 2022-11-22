import React, { useState, useEffect } from "react";
import axios from "axios";
import { ICountry } from "./types";
import Card from "../card/Card";
import "./list.scss";

const List = () => {
  const [list, setList] = useState<ICountry[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get<ICountry[]>(
        "https://restcountries.com/v3.1/all"
      );
      setList(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {list.map((country) => (
        <Card key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default List;
