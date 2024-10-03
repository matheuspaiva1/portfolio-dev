import React from 'react'
import CardSkills from '../components/CardSkills'
import { useColorMode } from '@chakra-ui/react';

export default function PageSkills() {
  const {colorMode} = useColorMode()

  return (
    <div id='skills' className='md:my-16'>
      <h1 className="font-medium text-center text-sm mt-8">SKILLS</h1>
      <h2 className="font-bold text-center text-2xl">Conheça as minhas habilidades</h2>
      {colorMode === "light" ? 
      <div className="md:grid md:grid-cols-3">
        <CardSkills title="Logica de programação" description='Tenho um conhecimento amplo de lógica de programação e seus fundamentos' imgs='/bin.svg' />
        <CardSkills title="Clean Code" description='Sigo as melhores práticas de clean code, mantendo meu código legível, organizado e de fácil entendimento, facilitando o trabalho em equipe' imgs='/code.svg' />
        <CardSkills title="Trabalho em equipe" description='Tenho um bom desenvolvimento em equipe, cultivo amizades e bons relacionamentos' imgs='/group.svg' />
        <CardSkills title="Bug fixer" description='Tenho experiência em identificar e corrigir bugs de forma eficiente, garantindo a estabilidade e desempenho do software' imgs='/bug.svg' />
        <CardSkills title="Comunicativo" description='Valorizo a comunicação clara e objetiva, tanto na colaboração com equipes quanto na documentação de projetos' imgs='/megaphone.svg' />
        <CardSkills title="Estudante assíduo" description='Como um estudante dedicado, estou sempre em busca de novos conhecimentos e aprimoramento contínuo' imgs='/study.svg' />
      </div> :
      <div className="md:grid md:grid-cols-3">
        <CardSkills title="Logica de programação" description='Tenho um conhecimento amplo de lógica de programação e seus fundamentos' imgs='/bin-light.svg' />
        <CardSkills title="Clean Code" description='Sigo as melhores práticas de clean code, mantendo meu código legível, organizado e de fácil entendimento, facilitando o trabalho em equipe' imgs='/cod-light.svg' />
        <CardSkills title="Trabalho em equipe" description='Tenho um bom desenvolvimento em equipe, cultivo amizades e bons relacionamentos' imgs='/group-light.svg' />
        <CardSkills title="Bug fixer" description='Tenho experiência em identificar e corrigir bugs de forma eficiente, garantindo a estabilidade e desempenho do software.' imgs='/bug-light.svg' />
        <CardSkills title="Comunicativo" description='Valorizo a comunicação clara e objetiva, tanto na colaboração com equipes quanto na documentação de projetos' imgs='/megaphone-light.svg' />
        <CardSkills title="Estudante assíduo" description='Como um estudante dedicado, estou sempre em busca de novos conhecimentos e aprimoramento contínuo' imgs='/study-light.svg' />
      </div> }
      
    </div>
  )
}
