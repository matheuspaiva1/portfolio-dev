/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import ButtonTheme from './ButtonTheme'
import { IoMenuOutline } from "react-icons/io5";
import { useColorMode } from '@chakra-ui/react';
import ModalNav from './ModalNav';

export default function Header() {
  const {colorMode} = useColorMode()
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <header className="">
      <div className='flex items-center justify-center'>
      {colorMode === "light" ? <img src="/devindev-light.svg" alt="logo" className='mr-12'/> : <img src="/devindev-dark.svg" alt="logo" className='mr-12'/>}
      <ButtonTheme/>
      <div className="ml-20">
        <button>
          <IoMenuOutline className="w-8 h-8" onClick={openModal}/>
        </button>
      </div>
      
      </div>
      <ModalNav show={showModal} close={closeModal}/>
    </header>
    
  )
}
