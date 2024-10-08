/* eslint-disable @next/next/no-img-element */
'use client'
import { Button, useColorMode } from '@chakra-ui/react'
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";


export default function ButtonTheme() {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <div className="border border-zinc-300 w-12 h-7 p-0.5 rounded-3xl bg-zinc-50">
        <Button variant="secondary" size="icon"
        onClick={()=> toggleColorMode()} > 
          {colorMode === "light" ? <IoSunny className=' text-zinc-500'/> : <IoMdMoon className=' text-zinc-500 ml-6'/> }
        </Button>

    </div>
  )
}
