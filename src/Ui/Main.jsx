import React from "react";

const Main = ({ children }) => {
  return (
    <div
      className="main-jsx w-screen h-fit  text-gray-500 bg-gray-100  flex-1 md:ml-50 xl:ml-64 xl:w-full flex lg:flex-row flex-col p-4 
    gap-2 mt-13 dark:bg-gray-800"
    >
      {children}
    </div>
  );
};

export default Main;
