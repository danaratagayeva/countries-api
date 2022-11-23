import React from "react";
import { ICountry } from "../../pages/home/types";

interface ICountryDetailsProps {
  country: ICountry | undefined;
}

const CountryDetails = ({ country }: ICountryDetailsProps) => {
  console.log(country);
  return (
    <div>
      <h1>test</h1>
      <h1>{country?.name.common}</h1>
    </div>
  );
};

export default CountryDetails;
