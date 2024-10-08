/* eslint-disable @next/next/no-img-element */
'use client'
import ButtonTheme from './ButtonTheme'
import { useColorMode } from '@chakra-ui/react';
import NavBar from './NavBar';

export default function Header() {
  const {colorMode} = useColorMode()

  return (
    <header className="mt-4">
      <div className='flex items-center justify-center'>
      {colorMode === "light" ? <img src="/devindev-light.svg" alt="logo" className='mr-12 ml-6'/> : <img src="/devindev-dark.svg" alt="logo" className='mr-12 ml-6'/>}
      <ButtonTheme/>
      
      <div className="ml-8">
        <NavBar/>
      </div>
        
      </div>

      

    </header>
    
  )
}
