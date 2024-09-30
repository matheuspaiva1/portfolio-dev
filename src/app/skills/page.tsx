import React from 'react'
import CardSkills from '../components/CardSkills'

export default function PageSkills() {
  return (
    <div>
      <h1 className="font-medium text-center text-sm mt-8">SKILLS</h1>
      <h2 className="font-bold text-center text-2xl">Conheça as minhas habilidades</h2>
      <CardSkills title="Logica de programação" description='Tenho um bom desenvolvimento em equipe, cultivo amizades e bons relacionamentos' imgs='/bin.svg'/>
    </div>
  )
}
