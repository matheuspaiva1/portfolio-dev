/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
  
  return (
    <footer>
      <h1 className="text-center text-xl my-4">Matheus Paiva</h1>
      <div className="flex items-center justify-center gap-8 my-4">
        <FaWhatsapp className='w-8 h-8'/>
        <FaInstagram className='w-8 h-8'/>
        <FaGithub className='w-8 h-8'/>
        <FaLinkedin className='w-8 h-8'/>
      </div>
    </footer>
  )
}
