'use client'
import React from 'react'

const Error = ({error,reset}:{error:Error & {digest?:string},reset:()=>void}) => {
  return (
    <div className='flex-1'>
        <h2>Something went wrong!!!</h2>
        <button onClick={()=>reset()}>Try again</button>
    </div>
  )
}

export default Error