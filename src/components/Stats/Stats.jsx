import React from "react";
import { empolyeesData } from "../../constans";
import Card from "./Card";
import Balance from "./balance";
import { MdDarkMode } from "react-icons/md";
const Stats = ({DarkMode}) => {
  return (
    <div className="flex flex-1 flex-col md:flex-row gap-4   2xl:mr-2">
      <div className="flex flex-col gap-4 h-full">
        {empolyeesData.map((data, index) => (
          <Card className="h-98" key={index} data={data} />
        ))}
      </div>
      <Balance DarkMode={DarkMode} />
    </div>
  );
};

export default Stats;
