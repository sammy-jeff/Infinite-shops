'use client'
import { useCart, useCartLocalStorage } from '@/app_state/cart'
import React, { ReactNode } from 'react'

const CartContext = ({children}:{children:ReactNode}) => {
    const cart = useCart((state:any)=>state?.cart)
    useCartLocalStorage(cart)
    console.log(cart);
    
  return (
    <div>{children}</div>
  )
}

export default CartContext