"use client";
import React, { useState } from "react";
import QuestionBarChartRender from "./QuestionBarChartRender";
import QuestionsAnswer from "../Questions/QuestionsAnswer";
import { commentsChartData } from "../../uitils/dataSort";

const QuestionsBarChart = ({ processedData }) => {
  const chartData = commentsChartData(processedData.data);
  const sortedData = Object.fromEntries(
    Object.entries(chartData).sort(([, a], [, b]) => b - a)
  );
  const [table, setTable] = useState(false);
  const [sort, setSort] = useState(false);
  return (
    <section className="h-fit rounded-xl bg-white pb-4">
      <div className="flex items-center justify-between border-b-2 p-4">
        <h1 className="font-semibold">
          How did you know or discover Singha beer?
        </h1>
        <di className="flex  items-center gap-x-2">
          <div className="flex items-center gap-2 font-semibold">
            Table
            <input
              onChange={() => setTable(!table)}
              type="checkbox"
              className={`toggle border-[#0FC284] bg-[#0FC284] [--tglbg:#E7F9F3] hover:bg-[#00BA79] ${
                !table && "grayscale"
              }`}
              checked={table}
            />
          </div>
          <div className="flex items-center gap-2 font-semibold">
            Sort
            <input
              onChange={() => setSort(!sort)}
              type="checkbox"
              className={`toggle border-[#0FC284] bg-[#0FC284] [--tglbg:#E7F9F3] hover:bg-[#00BA79] ${
                !sort && "grayscale"
              }`}
              checked={sort}
            />
          </div>
        </di>
      </div>
      <div
        className={`grid grid-cols-1 px-3  ${
          table && "lg:grid-cols-2"
        } w-full gap-4  p-4 duration-300`}
      >
        <div className={`${!table && "lg:max-w-[50%]"}`}>
          <QuestionBarChartRender data={sort ? sortedData : chartData} />
        </div>

        {table && <QuestionsAnswer data={sort ? sortedData : chartData} />}
      </div>
    </section>
  );
};

export default QuestionsBarChart;
