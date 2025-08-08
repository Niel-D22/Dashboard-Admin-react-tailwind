import React from "react";
import { links } from "../../constans/index";
import LinkItem from "./LinkItem";

const Sidebar = ({ isSidebarOpen }) => {
  return (
  <aside
  className={`sidebar-base ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } md:translate-x-0`} // ⬅️ Tambahkan ini
>

      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {links.map((link, index) => (
            <LinkItem key={index} {...link} />
          ))}
        </ul>
      </div>
  

    </aside>
  );
};

export default Sidebar;
