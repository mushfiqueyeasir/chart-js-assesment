import React from "react";

const QuestionsAnswer = ({ data }) => {
  return (
    <div className="max-h-[28rem] overflow-auto">
      <table className="table  border text-black ">
        {/* head */}
        <thead>
          <tr className="bg-[#E7F9F3] !font-normal !text-black">
            <th>Answer</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {Object.keys(data).map((item: string, index: number) => (
            <tr key={index}>
              <td>{item}</td>
              <td>
                {data[item]} (
                {(
                  ((data[item] as number) /
                    (Object.values(data) as number[]).reduce(
                      (acc: number, current: number) => acc + current,
                      0
                    )) *
                  100
                ).toFixed(1)}
                %)
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsAnswer;
