import React from "react";
import Title from "../../Ui/Title";
import { FiSend } from "react-icons/fi";
import BaChart from "./BaChart";

const balance = ({ DarkMode }) => {
  return (
    <div className="p-5 bg-b w-full   rounded-2xl dark:bg-gray-600 bg-white dark:text-gray-300">
      <div className="flex justify-between items-center">
        <Title>Statistik Project</Title>
        <FiSend className=" bg-gray-500 w-8 h-8 p-2 rounded-full text-gray-300" />
      </div>
      <div>
  
      </div>
      
      <BaChart  DarkMode={DarkMode} />
    </div>
  );
};

export default balance;
