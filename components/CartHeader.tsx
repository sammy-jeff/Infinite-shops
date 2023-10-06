"use client"
import { useCart } from '@/app_state/cart'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'

const CartHeader = () => {
  const closeCart = useCart((state:any)=>state.closeCart)
  return (
    <div className='w-full flex justify-center items-center flex-[0.2] border-b'>
        <div className='w-[90%] flex justify-between items-center'>
            <h2 className='text-[#607d8b] font-semibold'>Shopping Cart</h2>
            <FontAwesomeIcon className='cursor-pointer' icon={faTimes} width={35} height={35} color='#607d8b' onClick={()=>closeCart()}/>
        </div>
    </div>
  )
}

export default CartHeader