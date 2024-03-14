// HorizontalBarChart.js
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
import { ageChartData } from "@/uitils/dataSort";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AgeByGroupStackedChart = ({ processedData }) => {
  const chartData = ageChartData(processedData.data);
  const labels = chartData.ageGroup;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Male",
        data: chartData.male,
        backgroundColor: "#E3F4EE",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 10,
          bottomRight: 10,
        },
        borderSkipped: false,
      },
      {
        label: "Female",
        data: chartData.female,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "#44F1B6",
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options: any = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
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
          footer: function (tooltipItems) {
            let sum = 0;
            let male = 0;
            let female = 0;
            tooltipItems.forEach(function (tooltipItem) {
              sum = sum + tooltipItem.raw;
              if (tooltipItem.dataset.label === "Male") {
                male = tooltipItem.raw;
              }
              if (tooltipItem.dataset.label === "Female") {
                female = tooltipItem.raw;
              }
            });
            return `${tooltipItems[0].label}\nMale: ${male} (${(
              (male / sum) *
              100
            ).toFixed(1)}%) \nFemale: ${female} (${(
              (female / sum) *
              100
            ).toFixed(1)}%)\nTotal: ${sum}`;
          },
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    scales: {
      x: {
        stacked: true,
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        display: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <section className=" h-fit rounded-xl bg-white pb-4 lg:w-[50%]">
      <div className="flex items-center justify-between border-b-2 p-4">
        <h1 className="font-bold">Age & Group</h1>
        <h2 className="font-semibold text-gray-400">
          Respondents: {processedData.length}
        </h2>
      </div>
      <div className="px-3">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default AgeByGroupStackedChart;
