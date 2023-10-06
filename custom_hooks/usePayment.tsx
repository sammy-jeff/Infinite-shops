import { useCart } from '@/app_state/cart';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useEffect, useState } from 'react'
import {useFlutterwave} from 'flutterwave-react-v3'
const usePayment = () => {
    const cart = useCart((state:any)=>state.cart)
    const [priceAccrued,setPriceAccrued] = useState(0)
    const [session,setSession] = useState(null as any)
    const supabase = createClientComponentClient()
     
    const config:any = {
        public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_KEY,
        tx_ref: Date.now(),
        amount: priceAccrued,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: session?.user.email,
        //    phone_number: '070********',
          name: session?.user?.user_metadata.username,
        },
        customizations: {
          title: 'Infinite Shops Checkout',
          description: 'Payment for items in cart',
          logo: '/transparent-logo.png',
        },
      };
      
    useEffect(()=>{
      const checkSession =async () => {
        const {data} = await supabase.auth.getSession()
        setSession(data.session as any)
        
      }
      checkSession()
    },[])
      useEffect(()=>{
        
        const price = cart.reduce((val:any,acc:any)=>{
            return val + acc.subTotal
        },0)
        
        setPriceAccrued(price)
    },[cart])
    const handleFlutterPayment  = useFlutterwave(config)
  return handleFlutterPayment
}

 const  usehandleFlutterPayment = ()=>{
  const handlePayment = usePayment()
  const clearCart = useCart((state:any)=>state.clearCart)
  const supabase = createClientComponentClient()
  console.log('I was clicked');
  const handler =async ()=>{
     const {data} =await supabase.auth.getSession()
     if (!data.session) {
      location.replace('/sign-in')
     }
    else{
      handlePayment({
        callback:async (response:any)=>{
            
             await supabase.from('User_Transactions').insert({
                transaction_id:response.transaction_id,
                amount:response.amount,
                created_at:response?.created_at as string,
                flw_ref:response.flw_ref,
                status:response.status,
            }).select()
            clearCart()
        },
        onClose:()=>{
            location.replace('/transactions')
            location.reload()
        }   
    })
    }
  }
  return handler
}

export default usehandleFlutterPayment