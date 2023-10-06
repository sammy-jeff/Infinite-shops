import CartDetails from '@/components/CartDetails'
import CartItems from '@/components/CartItems'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart Section',
}
const CartPage = () => {
  return (
    <main className='flex-1 flex justify-center'>
      <div className='w-[93%] flex flex-col gap-y-4 lg:grid lg:grid-cols-2-uneq-col lg:gap-x-6 py-8'>
      <div className='border py-4 h-fit'>
      <CartItems/>
      </div>
      <CartDetails/>
      </div>
    </main>
  )
}

export default CartPage