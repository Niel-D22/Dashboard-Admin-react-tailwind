import React from "react";
import User from "./User";
import ShortCuts from "./ShortCuts";
import DonutChart from "./DonutChart";

const Profile = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="500"
      className="px-2 py-4 lg:mt-0 mt-2 bg-gray-200 rounded-2xl w-full dark:bg-gray-700 
      lg:w-60 xl:w-80 flex  flex-col
    justify-between gap-4"
    >
      <User />
      <ShortCuts />
      <DonutChart />
    </div>
  );
};

export default Profile;
