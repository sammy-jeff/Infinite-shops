'use client'
import React from 'react'

const Error = ({error,reset}:{error:Error & {digest?:string},reset:()=>void}) => {
  return (
    <div className='flex-1 h-screen flex justify-center items-center'>
        <h2>Something went wrong!!!</h2>
        <button onClick={()=>reset()} className='px-3 py-4 bg-[#607d8b] w-14'>Try again</button>
    </div>
  )
}

export default Error