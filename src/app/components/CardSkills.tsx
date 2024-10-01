/* eslint-disable @next/next/no-img-element */
import { useColorMode } from '@chakra-ui/react';
import React from 'react'

interface CardProps{
  title: string;
  description: string;
  imgs: string;
}

const CardSkills:React.FC<CardProps>=({title, description, imgs}) => {
  const {colorMode} = useColorMode()

  return (
    <div className='my-8 m-4'>
      {colorMode === "dark" ? 
      <div className="mt-4 bg-gray-900 p-4 rounded-lg">
        <img src={imgs} alt="" className='py-4' />
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p className=''>{description}</p>
      </div> : 
      <div className="mt-4 bg-gray-200 p-4 rounded-lg">
        <img src={imgs} alt="" className='py-4'/>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p>{description}</p>
      </div> 
      }
      
      
    </div>
  )
}

export default CardSkills
