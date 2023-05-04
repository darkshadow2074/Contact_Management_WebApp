import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

interface CountryData {
  countriesData: any;
}
export const LineGraphComponent: FC<CountryData> = ({ countriesData }) => {
  const chartData = {
    labels: countriesData.map((country: any) => country.country),
    datasets: [
      {
        label: "Total Cases",
        data: countriesData.map((country: any) => country.cases),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Cases Fluctuations</h2>
      <Line data={chartData} />
    </div>
  );
};
