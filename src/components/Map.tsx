import React, { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
interface CountryData {
  countriesData: any;
}

export const Map: FC<CountryData> = ({ countriesData }) => {
  // const mapCenter = [20, 0];
  console.log(countriesData);
  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <MapContainer center={[61.505, -0.09]} zoom={3} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countriesData.map((country: any) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Total Active Cases: {country.active}</p>
                <p>Total Recovered Cases: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
