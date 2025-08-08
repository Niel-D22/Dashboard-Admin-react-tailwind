import React from 'react'
import userLogo from "../../assets/nils.jpg"
const User = () => {
  return (
    <div  data-aos="fade-left" data-aos-duration="700" className= 'flex gap-3 items-center bg-white p-4 rounded-full dark:bg-gray-600 h-20 dark:text-gray-300'>
        <img src={userLogo} alt="user image" className='w-12 h-13  rounded-full'/>
            <h3 className='font-semibold text-2xl'>Nilz</h3>
            <p>Developer</p>
        </div>

  )
}

export default User