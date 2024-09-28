/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ButtonTheme from './buttonTheme'

export default function Header() {
  return (
    <header className='flex items-center justify-center'>
      <img src="/devindev-light.svg" alt="logo" className='mr-12'/>
      <ButtonTheme/>
      <div className="ml-20">
        <button>
          <img src="/menu.svg" alt="menu" />
        </button>
      </div>
    </header>
  )
}
