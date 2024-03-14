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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const QuestionBarChartRender = ({ data }) => {
  const labels = Object.keys(data);
  const chartData = {
    labels: labels,
    datasets: [
      {
        axis: "y", // change axis to x
        data: Object.values(data),
        fill: false,
        backgroundColor: [
          "#072A2D",
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
        borderRadius: 10,
        width: 100,
      },
    ],
  };

  // Options for the chart
  const options = {
    indexAxis: "x", // change indexAxis to y
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
          footer: function (tooltipItems) {
            const total = Object.values(data).reduce(
              (acc, current) => (acc as any) + current,
              0
            )
            return `${tooltipItems[0].label}\nAmount: ${
              tooltipItems[0].raw
            } (${(
              (tooltipItems[0].raw /
                (total as any)) *
              100
            ).toFixed(1)}%)\nTotal: ${Object.values(data).reduce(
              (acc, current) => (acc as any) + current,
              0
            )}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return "";
          },
        },
        grid: {
          display: true,
        },
      },
      x: {
        display: true,
        ticks: {
          callback: function (value, index, ticks) {
            return Object.keys(data)[value].length > 15
              ? Object.keys(data)[value].slice(0, 12) + "..."
              : Object.keys(data)[value];
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <section>
      <Bar data={chartData} options={options as any} />
    </section>
  );
};

export default QuestionBarChartRender;
