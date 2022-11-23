import React from "react";

interface ISearchProps {
  query: string;
  setQuery: (arg: string) => void;
}
const Search = ({ query, setQuery }: ISearchProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Country"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
