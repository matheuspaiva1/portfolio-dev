/* eslint-disable @next/next/no-img-element */
'use client'
import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import PageSobre from '../sobreMim/page'

export default function Main() {
  const {colorMode} = useColorMode()

  return (
    <main className='my-20'>
      <div className="mx-6">
        <h1 className='text-4xl font-extrabold '> Hello World </h1>
        <p className='ml-10 my-6 text-lg'>Eu sou o Matheus</p>
        <h1 className='text-4xl font-extrabold'>Software Developer</h1>
      </div>

      <Button colorScheme='cyan' marginTop='2em' marginLeft='1.5em'>
        Precisa de algum projeto?
      </Button>

      <div className="">
        <img src="/pose1-ok.png" alt="pose 1 player" className='' />
      </div>

      {colorMode === "light" ? 
      <div className="flex items-center justify-center gap-4 bg-zinc-100 w-full m-0">
        <img src="/html-light.svg" alt="" />
        <img src="/css-light.svg" alt="" />
        <img src="/js-light.svg" alt="" />
        <img src="/ts-light.svg" alt="" />
        <img src="/react-light.svg" alt="" />
        <img src="/ang-light.svg" alt="" />
      </div> : 
      <div className="flex items-center justify-center gap-4 bg-zinc-800 w-full m-0">
        <img src="/html.svg" alt="" />
        <img src="/css.svg" alt="" />
        <img src="/js.svg" alt="" />
        <img src="/ts.svg" alt="" />
        <img src="/react.svg" alt="" />
        <img src="/ang.svg" alt="" />
      </div>}

      <PageSobre/>
        

    </main>
  )
}
