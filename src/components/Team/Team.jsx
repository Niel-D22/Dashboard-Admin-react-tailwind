import React from "react";
import Title from "../../Ui/Title";
import Member from "./Member";
import { users } from "../../constans/index";

const Team = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="500" className=" bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 
    flex flex-col  p-5 gap-2">
      <Title>Team</Title>
      {users.map((user, index) => (
        <Member  key={index} user={user} />
      ))}
    </div>
  );
};

export default Team;
