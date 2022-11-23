import React from "react";
interface IFilterProps {
  region: string;
  setRegion: (args: string) => void;
}
const Filter = ({ region, setRegion }: IFilterProps) => {
  return (
    <div>
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option></option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
