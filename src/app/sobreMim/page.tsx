/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function PageSobre() {

  return (
    <div id="sobre-mim" className='md:flex md:items-center md:justify-center'>
      <div className="my-12 md:my-0 border-s-[30px]  border-y-[20px] border-cyan-400 w-72 md:w-[160em] md:h-56 h-64 mx-auto md:ml-40">
        <img src="/pose2-player.png" alt="pose 2 player" className='mx-auto md:mx-0 md:w-[160em] md:h-56 bg-zinc-200'/>
      </div>
      <div className="mt-8 md:mt-16 md:px-60">
        <div className="ml-2 p-2 md:ml-0 md:p-0">
          <h1 className="text-3xl font-bold ml-4 md:ml-0 ">Sobre mim</h1>
          <p>
            Atualmente estou morando em Ocara-CE, cursando o 3º semestre do
            curso de Sistemas de Informação, na Universidade Federal do Ceará.
          </p>
          <br />
          <p>
            Desde sempre fui fascinado pela tecnologia, sempre procurando saber
            como as coisas funcionam como eram feita as tecnologias que
            utilizamos no dia-a-dia, seja uma rede social ou straming de videos
            ou uma ferramenta de busca. Tendo isso em mente resolvi cursar o
            ensino médio técnico no curso de Informática, onde fiquei ainda mais
            fascinado por essas tecnologias, estudando-as ao decorrer do curso,
            aprendendo como cada uma funciona e aprimorando os conhecimentos de
            como eram feitas. Com esses estudos, passei a me interessar pela
            área de Desenvolvimento para Web, estudando a criação de sites,
            aplicações para a rede, participando de projetos tanto na escola
            quanto fora dela por meio de workshops e cursos de desenvolvimento.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 my-4">
          <a href="https://wa.me/5585994145479">
            <FaWhatsapp className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/matheuss.p00/">
            <FaInstagram className="w-8 h-8" />
          </a>
          <a href="https://github.com/matheuspaiva1">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/matheus-paiva-51b1751b1/">
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  )
}
