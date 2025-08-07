import { useState,useEffect } from 'react'
import Header from "./components/header/header"
import Sidebar from "./components/sidebar/sidebar"
import Hero from "./components/hero/hero"
import Main from './Ui/Main';
import Content from './Ui/Content'
import Profile from './components/Profile/Profile';

function App() {

  const [DarkMode, setDarkMode] = useState(false);
  const [isSidebarOpen,setSidebarOpen]=useState(false)
  

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

  const toggleSidebar=()=>{
setSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header  toggleSidebar={toggleSidebar} DarkMode={DarkMode} toggleDarkMode={toggleDarkMode}/>
        <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>
    <Main>
     <Content>Main content</Content>
     <Profile></Profile>
    </Main>
      </div>
    </>
  )
}

export default App
