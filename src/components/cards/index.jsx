import React from 'react'
import { CardsData } from '@/lib/data'
import { PencilIcon } from '@/lib/assests/icons'

const Card = () => {
  const rendersCards = (item, index) => {
    return (
      <div key={index} className='flex gap-4 justify-center'>
        <div className='p-1 rounded h-fit w-fit bg-gray-200'>
          <PencilIcon />
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h4 className='font-bold'>{item.title}</h4>
          <span className='text-center'>{item.description}</span>
        </div>
      </div>
    )
  }

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-[80px]'>
      {CardsData.map(rendersCards)}
    </div>
  )
}

export default Card
