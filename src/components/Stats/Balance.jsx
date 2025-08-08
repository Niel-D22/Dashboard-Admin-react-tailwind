import React from "react";
import Title from "../../Ui/Title";
import { FiSend } from "react-icons/fi";
import BaChart from "./BaChart"

const balance = ({DarkMode}) => {
  return (
    <div className="p-5 bg-b w-full  h-fit rounded-2xl dark:bg-gray-600 bg-white dark:text-gray-300">
      <div className="flex justify-between items-center">
        <Title>Balance</Title>
        <FiSend className=" bg-gray-500 w-8 h-8 p-2 rounded-full text-gray-300" />
      </div>
      <div>
        <h1
          className="font-bold text-2xl
        "
        >
          Rp.600.000 <span className="font-medium text-xl">(IDR)</span>
        </h1>
        <span>on July 2025</span>
      </div>
      <BaChart DarkMode={DarkMode}/>
    </div>
  );
};

export default balance;
