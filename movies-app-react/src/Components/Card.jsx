import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"

function Card({title, img}) {
  return (
    <div className='cursor-pointer w-56 h-68 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='category absolute bg-white/60 rounded-lg text-black text-sm top-2 left-2 p-1 font-medium'>Action</span>
            <img src={img} alt={title} />
            <div className='hover:bg-green-700 hover:text-white absolute top-2 right-1 flex justify-center items-center bg-white w-8 h-8 rounded-full transition-all duration-300 front-bold'>
                <AiOutlinePlus className='font-extrabold'/>
            </div>
        </figure>
        <p>
            <span className='text-sm font-light'>Spider man</span>
        </p>
    </div>
  )
}

export default Card
