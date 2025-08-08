import React from 'react'
import Title from '../../Ui/Title'
import {events} from "../../constans/index"
import Item from './Item'

const Event = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="500" className='bg-white p-5 rounded-2xl dark:bg-gray-600
    dark:text-300 flex flex-1 flex-col gap-3'> 
    <Title>Projects</Title>
{
    events.map((event,index)=>(
<Item key={index} event={event}/>
    )) 
}
    </div>
  )
}

export default Event