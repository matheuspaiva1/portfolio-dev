/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Button } from '@chakra-ui/react'

export default function PageContato() {
  return (
    <div id='contato' className='md:flex md:items-center md:justify-center md:gap-20 md:my-24'>
      <div className="my-12 md:my-0 border-s-[30px] border-y-[20px] border-cyan-400 w-72 md:w-[40em] md:h-56 h-64 mx-auto md:ml-40">
        <img src="/pose2-player.png" alt="pose 2 player" className='mx-auto md:mx-0 md:w-[40em] md:h-56 bg-zinc-200'/>
      </div>
      <div className="md:ml-20 md:px-24">
        <h1 className="font-medium ml-4 my-4 text-sm mt-8">ENTRE EM CONTATO</h1>
        <h2 className="font-bold ml-4 my-4 text-2xl">Quer desenvolver uma ideia?</h2>
        <p className="ml-4 my-4 ">Sou um desenvolvedor engajado em tecnologias front end (NextJS, Typescript, Javascript, HTML, CSS), tenho noções de design com a ferramenta figma.</p>
        <p className="ml-4 my-4 ">Atualmente estou morando em Ocara-CE, cursando o 3º semestre do curso de Sistemas de Informação, na Universidade Federal do Ceará.</p>
        <a href="https://wa.me/5585994145479">
          <Button colorScheme='cyan' marginTop='1em' marginLeft='1em'>
            Fale comigo
          </Button>
        </a>
      </div>
    </div>
  )
}
