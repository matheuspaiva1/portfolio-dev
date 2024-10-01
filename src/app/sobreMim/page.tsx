/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ImgSobre from '../components/ImgSobre'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function PageSobre() {

  return (
    <div id='sobre-mim'>
      <ImgSobre/>

      <h1 className='text-3xl font-bold ml-4 '>Sobre mim</h1>
      <br />
      <div className="ml-2 p-2">
        <p>Atualmente estou morando em Ocara-CE, cursando o 3º semestre do curso de Sistemas de Informação, na Universidade Federal do Ceará.</p>
        <br />
        <p> 
          Desde sempre fui fascinado pela tecnologia, sempre procurando saber como as coisas funcionam como eram feita as tecnologias que utilizamos no dia-a-dia, seja uma rede social ou straming de videos ou uma ferramenta de busca. Tendo isso em mente resolvi cursar o ensino médio técnico no curso de Informática, onde fiquei ainda mais fascinado por essas tecnologias, estudando-as ao decorrer do curso, aprendendo como cada uma funciona e aprimorando os conhecimentos de como eram feitas. Com esses estudos, passei a me interessar pela área de Desenvolvimento para Web, estudando a criação de sites, aplicações para a rede, participando de projetos tanto na escola quanto fora dela por meio de workshops e cursos de desenvolvimento.
        </p>
      </div>

      <div className="flex items-center justify-center gap-8 my-4">
        <a href=""><FaWhatsapp className='w-8 h-8'/></a>
        <a href="https://www.instagram.com/matheuss.p00/"><FaInstagram className='w-8 h-8'/></a>
        <a href="https://github.com/matheuspaiva1"><FaGithub className='w-8 h-8'/></a>
        <a href="https://www.linkedin.com/in/matheus-paiva-51b1751b1/"><FaLinkedin className='w-8 h-8'/></a>
      </div>

      

      
      
    </div>
  )
}
