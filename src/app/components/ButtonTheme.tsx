/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function ButtonTheme() {
  return (
    <div className="border border-zinc-300 w-12 h-7 p-0.5 rounded-3xl bg-zinc-50">
        <button className='rounded-2xl bg-zinc-300 p-0.5'> 
          <img src="/sun.svg" alt="sun" className="w-3.5" /> 
        </button>
    </div>
  )
}
