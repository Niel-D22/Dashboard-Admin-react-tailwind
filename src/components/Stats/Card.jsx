import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-white p-4  rounded-2xl flex flex-rowl flex-1  items-start sm:items-center gap-2 sm:gap-4 dark:bg-gray-600 dark:text-gray-300 w-full ">
      
      <span
        className={`
          ${data.bgColor} 
          p-2 sm:p-3 md:p-4 
          text-xl sm:text-2xl md:text-3xl 
          rounded-2xl 
          dark:bg-gray-500
        `}
      >
        <data.icon />
      </span>

      <div className="text-left">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
          {data.count}
        </h2>
        <p className="text-sm sm:text-base md:text-lg">{data.title}</p>
      </div>
    </div>
  );
};

export default Card;
