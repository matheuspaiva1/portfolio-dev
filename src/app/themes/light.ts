'use client'
import { extendTheme } from '@chakra-ui/react'

const light = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        margin:0,
        "font-family": 'Montserrat',
      },
      code:{
        "font-family": 'Montserrat'
      },
    },
  },
}

export default extendTheme(light)
