import React from "react";

const Item = ({ event }) => {
  return (
    <div className="flex gap-5 items-center">
      <span className=" text-center   bg-gray-300 font-bold text-gray-700  rounded-xl h-11 w-11  ">{event.date}</span>
      <div className="flex  flex-col">
        <h1 className="font-bold text-md dark:text-gray-100">{event.title}</h1>
        <p className="text-gray-400 text-xs">{event.description}</p>
      </div>
    </div>
  );
};

export default Item;
