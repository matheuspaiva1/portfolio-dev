/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ImgSobre from '../components/ImgSobre'
import { useColorMode } from '@chakra-ui/react'

export default function PageSobre() {
  const {colorMode} = useColorMode()

  return (
    <div>
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

      {colorMode === "light" ? 
      <div className="flex items-center justify-center gap-12 mt-4">
        <img src="/whatsapp.svg" alt="" />
        <img src="/linkedin.svg" alt="" />
        <img src="/github.svg" alt="" />
        <img src="/instagram.svg" alt="" />
      </div> : 
      <div className="flex items-center justify-center gap-12 mt-4">
        <img src="/whats-light.svg" alt="" />
        <img src="/linke-light.svg" alt="" />
        <img src="/git-light.svg" alt="" />
        <img src="/insta-light.svg" alt="" />
      </div>}

      
      
    </div>
  )
}
