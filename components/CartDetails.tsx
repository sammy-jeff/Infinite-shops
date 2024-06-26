'use client'
import { useCart } from '@/app_state/cart'
import usehandleFlutterPayment from '@/custom_hooks/usePayment'
import { formatPrice } from '@/helper/priceFormatter'
import React, { useEffect, useState } from 'react'

const CartDetails = () => {
    const cart = useCart((state:any)=>state.cart)
    const [totalPrice,setTotalPrice] = useState(0)
    const handlePayment = usehandleFlutterPayment()
    useEffect(()=>{
        const calcTotalPrice = cart?.reduce((val:number,acc:any)=>{
            return val+acc.subTotal
        },0)
        setTotalPrice(calcTotalPrice)
    },[cart])
  return (
    <div className='flex flex-col items-center border dark:border-black h-fit lg:sticky lg:top-28'>
        <div className='w-full border-b p-4 bg-[#f0f0f0] dark:bg-slate-800 font-semibold text-[#607d8b] text-[clamp(16px,4vw,18px)]'>Cart Totals</div>
        <div className='w-[90%] text-[#3a3a3a] dark:text-slate-200'>
        <div className='flex flex-col gap-y-5'>
            <div className='border-b py-4 grid grid-cols-2'>
                <p className='font-semibold'>Subtotal</p>
                <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className='border-b py-4 grid grid-cols-2'>
                <p className='font-semibold'>Shipping</p>
                <span className='leading-9'>Flat rate: <b>₦0.00</b> Shipping to <b>Nigeria</b>.</span>
            </div>
            <div className='border-b py-4 grid grid-cols-2'>
                <p className='font-semibold'>Total</p>
                <span>{formatPrice(totalPrice)}</span>
            </div>
        </div>
            <button className='mt-6 mb-6 border-[2px] border-[#607d8b] w-full py-4 text-[#607d8b] font-medium' disabled={!totalPrice?true:false} onClick={handlePayment}>Proceed To  Checkout</button>
        </div>
    </div>
  )
}

export default CartDetails