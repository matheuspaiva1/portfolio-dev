/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function ModalNav() {
  return (
    <div className='bg-[#E9E9E9]'>
      <div className="flex items-center justify-center gap-44">
        <img src="/devindev-light.svg" alt="logo" />
        <img src="/close.svg" alt="close" />
      </div>
      <div className="ml-8 mt-4 text-xl flex flex-col gap-10">
        <h1>Sobre mim</h1>
        <h1>Meus Projetos</h1>
        <h1>Habilidades</h1>
        <h1>Contato</h1>
      </div>

       
    </div>
  )
}
