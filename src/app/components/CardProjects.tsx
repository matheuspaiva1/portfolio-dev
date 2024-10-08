/* eslint-disable @next/next/no-img-element */
'use client'
import { useColorMode } from '@chakra-ui/react';
import { MdOutlineArrowOutward } from 'react-icons/md'

interface DescProjects{
  title: string;
  description: string;
  tec1: string;
  tec2: string;
  tec3: string;
  imgs: string;
  link: string;
}

const CardProjects:React.FC<DescProjects> = ({title, description,tec1,tec2,tec3, imgs, link}) => {
  const {colorMode} = useColorMode()


  return (
    <div className="my-8 m-4 md:m-20">
      {colorMode === 'dark' ? (
        <div className="mt-4 bg-gray-900 p-4 rounded-lg md:flex md:items-center md:justify-center md:gap-16 md:p-16">
          <img src={imgs} alt="to-do" className="w-full h-60 mx-auto" />
          <div className="">
            <h1 className="my-4 text-3xl font-bold">{title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-zinc-700 px-2 rounded-3xl py-1 text-sm text-center">
                {tec1}
              </span>
              <span className="bg-zinc-700 px-2 rounded-3xl text-sm py-1 text-center">
                {tec2}
              </span>
              <span className="bg-zinc-700 py-1 px-2 rounded-3xl text-sm">
                {tec3}
              </span>
            </div>
            <p className="font-light mb-4">{description}</p>
            <a href={link} className="flex items-center gap-1 hover:underline">
              <p>Acessar projeto</p>
              <MdOutlineArrowOutward />
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-4 bg-gray-200 p-4 rounded-lg md:flex md:items-center md:justify-center md:gap-16 md:p-16 ">
          <img src={imgs} alt="to-do" className="w-full h-60 mx-auto" />
          <div className="">
            <h1 className="my-4 text-3xl font-bold">{title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-zinc-400 text-zinc-50 px-2 rounded-3xl py-1 text-sm text-center">
                {tec1}
              </span>
              <span className="bg-zinc-400 text-zinc-50 px-2 rounded-3xl text-sm py-1 text-center">
                {tec2}
              </span>
              <span className="bg-zinc-400 text-zinc-50 py-1 px-2 rounded-3xl text-sm">
                {tec3}
              </span>
            </div>
            <p className="font-light mb-4">{description}</p>
            <a href={link} className="flex items-center gap-1 hover:underline">
              <p>Acessar projeto</p>
              <MdOutlineArrowOutward />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardProjects