import React from 'react'
import {BsCheck} from 'react-icons/bs'

function Check({isComplited}) {
  return (
    <div className={`border-2 rounded-lg border-pink-400 w-5 h-5 mr-4 
    flex items-center justify-center
    ${isComplited && 'bg-pink-400'}
    `}>
        {
        isComplited && 
        <BsCheck size={22} className = "text-gray-900 " />
        }
        

    </div>
  )
}

export default Check