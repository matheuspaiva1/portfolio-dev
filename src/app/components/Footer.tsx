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
        <a href=""><FaWhatsapp className='w-8 h-8'/></a>
        <a href="https://www.instagram.com/matheuss.p00/"><FaInstagram className='w-8 h-8'/></a>
        <a href="https://github.com/matheuspaiva1"><FaGithub className='w-8 h-8'/></a>
        <a href="https://www.linkedin.com/in/matheus-paiva-51b1751b1/"><FaLinkedin className='w-8 h-8'/></a>
      </div>
    </footer>
  )
}
