import React from 'react'
import ImgSobre from '../components/ImgSobre'
import { Button } from '@chakra-ui/react'

export default function PageContato() {
  return (
    <div id='contato'>
      <ImgSobre/>
      <h1 className="font-medium ml-4 my-4 text-sm mt-8">ENTRE EM CONTATO</h1>
      <h2 className="font-bold ml-4 my-4 text-2xl">Quer desenvolver uma ideia?</h2>
      <p className="ml-4 my-4 ">Sou um desenvolvedor engajado em tecnologias front end (NextJS, Typescript, Javascript, HTML, CSS), tenho noções de design com a ferramenta figma.</p>
      <a href="">
        <Button colorScheme='cyan' marginTop='1em' marginLeft='1em'>
          Fale comigo
        </Button>
      </a>
    </div>
  )
}
