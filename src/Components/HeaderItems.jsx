import React from 'react'

const HeaderItems = ({name,Icon}) => {
  return (
    <div className=' text-white font-semi-bold flex items-center gap-3 text-[17px]  cursor-pointer hover:underline mb-1.5 underline-offset-8 hover:transition-all duration-300 ease-in
    '>
        < Icon />
        <h2 >{name}</h2>
    </div>
  )
}

export default HeaderItems