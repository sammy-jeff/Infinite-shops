'use client'
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {useTheme} from 'next-themes'
const ThemeToggle = () => {
    const {resolvedTheme,setTheme} = useTheme()
  return (
    <div className='fixed bottom-7 right-2 z-10 p-2 rounded-full h-fit w-fit bg-[rgba(0,0,0,0.3)] cursor-pointer' onClick={()=>setTheme(resolvedTheme==='dark'?'light':'dark')}>
        <FontAwesomeIcon icon={resolvedTheme==='dark'?faLightbulb:faMoon} width={30} height={30} className={`text-[clamp(16px,4vw,30px)]`}/>
    </div>
  )
}

export default ThemeToggle