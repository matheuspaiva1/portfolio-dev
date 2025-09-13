/* eslint-disable @next/next/no-img-element */
'use client'
import { Button, useColorMode } from '@chakra-ui/react'
import PageSobre from '../sobreMim/page'
import PageProjects from '../projetos/page'
import PageSkills from '../skills/page'
import PageContato from '../contato/page'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { DiPostgresql } from 'react-icons/di'
import { BiLogoTypescript } from 'react-icons/bi'
import { IoLogoCss3 } from 'react-icons/io5'
import { PiFileCSharp } from 'react-icons/pi'

export default function Main() {
  const { colorMode } = useColorMode()

  const title = "<Hello World>"
  const subTitle = "</Software Developer>"

  return (
    <main className="my-20 md:my-1">
      <div className="md:flex md:items-center md:justify-center md:gap-64">
        <div className="mx-6">
          <h1 className="text-4xl font-extrabold "> {title} </h1>
          <p className="ml-10 my-6 text-lg">Eu sou o Matheus</p>
          <h1 className="text-4xl font-extrabold"> {subTitle} </h1>
          <a href="https://wa.me/5585992996250">
            <Button colorScheme="cyan" marginTop="2em">
              Precisa de algum projeto?
            </Button>
          </a>
        </div>
        <div className="">

        </div>
      </div>

      {colorMode === 'light' ? (
        <div className="mt-8 flex items-center justify-center gap-4 py-4 bg-zinc-100 w-full m-0 md:gap-32">
          <FaReact size={30}/>
          <IoLogoCss3 size={30}/>
          <FaNodeJs size={30}/>
          <BiLogoTypescript size={30}/>
          <DiPostgresql size={30}/>
          <PiFileCSharp size={30}/>
        </div>
      ) : (
        <div className="mt-8 flex items-center justify-center gap-4 py-4 bg-zinc-800 w-full m-0 md:gap-32">
          <FaReact size={30} />
          <IoLogoCss3 size={30}/>
          <FaNodeJs size={30}/>
          <BiLogoTypescript size={30}/>
          <DiPostgresql size={30}/>
          <PiFileCSharp size={30}/>
          </div>
      )}

      <PageSobre />

      <PageProjects />

      <PageSkills />

      <PageContato />
    </main>
  )
}
