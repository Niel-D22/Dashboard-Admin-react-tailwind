import React from 'react'

const Content = ({children}) => {
  return (
    <div className='flex-1 flex  flex-col lg:space-y-0  md:space-y-6 gap-5 lg:gap-5'>{children}</div>
  )
}

export default Content