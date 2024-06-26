"use client"

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'

const CartHeader = () => {
  
  const router = useRouter()
  return (
    <div className='w-full sticky flex justify-center items-center bg-white dark:bg-inherit dark:border-[black] z-10 h-[80px] border-b'>
        <div className='w-[90%] flex justify-between items-center'>
            <h2 className='text-[#607d8b] font-semibold'>Shopping Cart</h2>
            <FontAwesomeIcon className='cursor-pointer' icon={faTimes} width={35} height={35} color='#607d8b' onClick={()=>router.back()}/>
        </div>
    </div>
  )
}

export default CartHeader