import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { ICountry } from "./types";
import Filter from "../../components/filter/Filter";
import Footer from "../../components/footer/Footer";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";

const Home = () => {
  const [list, setList] = useState<ICountry[]>([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchRegion = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      setList(res.data);
      console.log("region");
    } catch (error) {
      console.log(error);
    }
  }, [region]);

  useEffect(() => {
    !region ? fetchData() : fetchRegion();
  }, [region, fetchRegion]);

  const filtered = query
    ? list.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      )
    : list;

  const fetchData = async () => {
    try {
      const res = await axios.get<ICountry[]>(
        "https://restcountries.com/v3.1/all"
      );
      setList(res.data);
      console.log("data");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Search query={query} setQuery={setQuery} />
      <Filter region={region} setRegion={setRegion} />
      <List data={filtered} />
      <Footer />
    </div>
  );
};

export default Home;
