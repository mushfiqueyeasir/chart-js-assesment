"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { locationChartData } from "../../uitils/dataSort";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LocationStackedChart = ({ processedData }) => {
  const chartData = locationChartData(processedData.data);
  const labels = Object.keys(chartData);
  const data = {
    labels: labels,
    datasets: [
      {
        data: Object.values(chartData),
        backgroundColor: [
          "#E3F4EE",
          "#44F1B6",
          "#15EDA3",
          "#27D09B",
          "#0FC083",
          "#18A1AD",
          "#11767F",
          "#0C4D53",
          "#072A2D",
          "#031A1C",
        ],
        borderRadius: {
          topLeft: 100,
          topRight: 100,
          bottomLeft: 100,
          bottomRight: 100,
        },
        borderSkipped: false,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const, // Specify type as 'y' explicitly
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "right",
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: true,
        callbacks: {
          title: function () {
            return null;
          },
          label: function () {
            return null;
          },
          footer: function (tooltipItems: any[]) {
            const total: any = Object.values(chartData).reduce(
              (acc: number, current: number) => acc + current,
              0
            );
            const percentage = (
              ((tooltipItems[0].raw as number) / total) *
              100
            ).toFixed(1);
            return `${tooltipItems[0].label}\nAmount: ${tooltipItems[0].raw} (${percentage}%) \nTotal: ${total}`;
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
      x: {
        display: false,
      },
    },
  };

  return (
    <section className="h-fit rounded-xl bg-white pb-4 lg:w-[50%]">
      <div className="flex items-center justify-between border-b-2 p-4">
        <h1 className="font-bold">Location</h1>
        <h2 className="font-semibold text-gray-400">
          Respondents: {processedData.length}
        </h2>
      </div>
      <div className="px-3">
        <Bar data={data} options={options as any} />
      </div>
    </section>
  );
};

export default LocationStackedChart;
