/* eslint-disable @next/next/no-img-element */
'use client'
import { useColorMode } from '@chakra-ui/react';
import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
  show: boolean;
  close: () => void;
}

const ModalNav:React.FC<ModalProps> = ({show, close}) => {
  const {colorMode} = useColorMode()

  if(!show){
    return null
  }

  return (
    <div className=''>
      <div className="flex items-center justify-center gap-32">
        {colorMode === "light" ? <img src="/devindev-light.svg" alt="logo" className='mr-12'/> : <img src="/devindev-dark.svg" alt="logo" className='mr-12'/>}
        <button onClick={close}>
          <IoCloseOutline className="w-8 h-8"/> 
        </button>
      </div>
      <div className="ml-8 mt-4 text-xl flex flex-col gap-10">
        <h1>Sobre mim</h1>
        <h1>Meus Projetos</h1>
        <h1>Habilidades</h1>
        <h1>Contato</h1>
      </div>

       
    </div>
  )
}

export default ModalNav