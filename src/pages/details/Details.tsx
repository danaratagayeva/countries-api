import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryDetails from "../../components/country-details/CountryDetails";
import { ICountry } from "../home/types";

const Details = () => {
  const { name } = useParams();
  const [country, setCountry] = useState();

  const fetchCountryData = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      setCountry(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCountryData();
  }, [name, fetchCountryData]);

  return <CountryDetails country={country} />;
};

export default Details;
