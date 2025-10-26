import React from 'react'

export default function EventDate({ date, onClick }) {
  return (
    <div 
        className="bg-black h-[35px] sm:h-[48px] w-[140px] sm:w-[175px] border-[1.3px] border-[#ED8600] rotate-[-90deg] flex items-center justify-center cursor-pointer hover:scale-105 sm:hover:scale-110 hover:ease-in-out transition-all duration-200"
        onClick={onClick}
    >
        <h1 className="text-[15px] sm:text-[23px] text-white">
            MARCH {date}
        </h1>
    </div>
  )
}
