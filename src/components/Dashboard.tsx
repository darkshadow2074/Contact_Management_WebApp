// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React from "react";

import { useState, useEffect } from "react";
import { LineGraphComponent } from "./LineGraphComponent";
export const Dashboard = () => {
  const [countriesData, setCountriesData] = useState([]);
  const getMeData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountriesData(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMeData("https://disease.sh/v3/covid-19/countries");
  }, []);

  return (
    <div className="Dashboard-container">
      <h1 className="heading">Dashboard for Covid-19</h1>
      <LineGraphComponent countriesData={countriesData} />
    </div>
  );
};
