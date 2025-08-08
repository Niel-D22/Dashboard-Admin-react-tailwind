import { useState, useEffect } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";

import Main from "./Ui/Main";
import Content from "./Ui/Content";
import Stats from "./components/Stats/Stats";
import Profile from "./components/Profile/Profile";
import Team from "./components/Team/Team";
import Event from "./components/Event/Event";

function App() {
  const [DarkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (DarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [DarkMode]);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="">
        <Header
          toggleSidebar={toggleSidebar}
          DarkMode={DarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="flex md:flex-row  flex-1">
          <Sidebar
            className=""
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <Main isSidebarOpen={isSidebarOpen}>
            {/* card dn grafik */}
            <Content>
              <Stats DarkMode={DarkMode} />
           <div className="flex gap-4">
              <Team />
              <Event />
              </div>
            </Content>
            {/* end */}

            <Profile />
          </Main>
        </div>
      </div>
    </>
  );
}

export default App;
