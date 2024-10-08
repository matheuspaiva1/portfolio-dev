/* eslint-disable @next/next/no-img-element */
'use client'
import { useColorMode } from '@chakra-ui/react';
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
        <a href="#sobre-mim"><h1>Sobre mim</h1></a>
        <a href="#page-project"><h1>Meus Projetos</h1></a>
        <a href="#skills"><h1>Habilidades</h1></a>
        <a href="#contato"><h1>Contato</h1></a>
      </div>

       
    </div>
  )
}

export default ModalNav