"use client"
import { useCart } from '@/app_state/cart'
import { formatPrice } from '@/helper/priceFormatter'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import usehandleFlutterPayment from '@/custom_hooks/usePayment'

const CartActions = () => {
    const cart = useCart((state:any)=>state.cart)
    const clearCart = useCart((state:any)=>state.clearCart)
    const [totalPrice,setTotalPrice] = useState(0)
    const [session,setSession] = useState(null as any)
    const supabase = createClientComponentClient()

    useEffect(()=>{
        const checkSession =async () => {
          const {data} = await supabase.auth.getSession()
          setSession(data.session as any)
          
        }
        checkSession()
      },[])
    useEffect(()=>{
        const calcTotalPrice = cart?.reduce((val:number,acc:any)=>{
            return val+acc.subTotal
        },0)
        setTotalPrice(calcTotalPrice)
    },[cart])
    
  const handleFlutterPayment = usehandleFlutterPayment()
    
  return (
    <>
    {cart.length?<div className='flex-[0.6] border-t flex flex-col'>
        <div className='flex justify-center items-center flex-[0.2] border-b'>
            <div className='flex justify-between items-center w-[95%] h-full'>
                <h3 className='text-[#607d8b] text-[15px] font-semibold'>Subtotal:</h3>
                <span className='text-[#3a3a3a] text-[14px]'>{formatPrice(totalPrice)}</span>
            </div>
        </div>
        <div className='flex justify-center items-center flex-[1]'>
            <div className='flex flex-col justify-center items-center w-[95%] h-full'>
                <Link href={`/cart`} className='w-full border-[2px] border-[#607d8b] p-4 flex justify-center items-center text-[#607db8] font-semibold text-[14px] mt-3'>View Cart</Link>
                <button className='w-full border-[2px] border-[#607d8b] p-4 flex justify-center items-center text-[#607db8] font-semibold text-[14px] mt-3' onClick={handleFlutterPayment}>Checkout</button>
            </div>
        </div>
    </div>:<button>Continue Shopping</button>}
    </>
  )
}

export default CartActions