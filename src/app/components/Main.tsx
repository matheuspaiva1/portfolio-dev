/* eslint-disable @next/next/no-img-element */
import { Button } from '@chakra-ui/react'
import React from 'react'

export default function Main() {
  return (
    <main className='my-10 mx-6'>
      <h1 className='text-4xl font-extrabold '> Hello World </h1>
      <p className='ml-10 my-6 text-lg'>Eu sou o Matheus</p>
      <h1 className='text-4xl font-extrabold'>Software Developer</h1>

      <Button colorScheme='cyan' marginTop='2em'>
        Precisa de algum projeto?
      </Button>

      <div className="">
        <img src="/pose1-ok.png" alt="pose 1 player" className='' />
      </div>

      <div className="">
        <img src="/html.svg" alt="" />
        <img src="/css.svg" alt="" />
        <img src="/js.svg" alt="" />
        <img src="/ts.svg" alt="" />
        <img src="/react.svg" alt="" />
        <img src="/ang.svg" alt="" />
      </div>

    </main>
  )
}
