import { useState,useEffect } from 'react'
import Header from "./components/header/header"
import Sidebar from './components/siderbar/sidebar'

import './App.css'

function App() {

  const [DarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (DarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [DarkMode]);

 function toggleDarkMode() {
  setDarkMode(prev => {
    console.log("Sebelumnya:", prev, "-> Jadi:", !prev);
    return !prev;
  });
}

  return (
    <>
      <div className='dark:bg-gray-500'>
        <Header DarkMode={DarkMode} toggleDarkMode={toggleDarkMode}/>
        <Sidebar/>
      </div>
    </>
  )
}

export default App
