"use client"
import { useCart } from '@/app_state/cart'
import { formatPrice } from '@/helper/priceFormatter'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import usehandleFlutterPayment from '@/custom_hooks/usePayment'
import { useRouter } from 'next/navigation'

const CartActions = () => {
    const cart = useCart((state:any)=>state.cart)
    const [totalPrice,setTotalPrice] = useState(0)
    const router = useRouter()
    
    useEffect(()=>{
        const calcTotalPrice = cart?.reduce((val:number,acc:any)=>{
            return val+acc.subTotal
        },0)
        setTotalPrice(calcTotalPrice)
    },[cart])
    
  const handleFlutterPayment = usehandleFlutterPayment()
    
  return (
    <>
    {cart.length?<div className='flex-[0.6] border-t dark:border-black flex flex-col'>
        <div className='flex justify-center items-center flex-[0.2] border-b dark:border-black'>
            <div className='flex justify-between items-center w-[95%] h-full'>
                <h3 className='text-[#607d8b] text-[15px] font-semibold'>Subtotal:</h3>
                <span className='text-[#3a3a3a] dark:text-slate-200 text-[14px]'>{formatPrice(totalPrice)}</span>
            </div>
        </div>
        <div className='flex justify-center items-center flex-[1]'>
            <div className='flex flex-col justify-center items-center w-[95%] h-full'>
                <button  className='w-full border-[2px] border-[#607d8b] p-4 flex justify-center items-center text-[#607db8] font-semibold text-[14px] mt-3' onClick={()=>window.location.reload()}>View Cart</button>
                <button className='w-full border-[2px] border-[#607d8b] p-4 flex justify-center items-center text-[#607db8] font-semibold text-[14px] mt-3' onClick={handleFlutterPayment}>Checkout</button>
            </div>
        </div>
    </div>:<Link href={`/all-products`} className='mx-auto mb-2' onClick={()=>router.back()}>Continue Shopping</Link>}
    </>
  )
}

export default CartActions