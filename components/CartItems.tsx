"use client"
import { useCart} from '@/app_state/cart'
import { formatPrice } from '@/helper/priceFormatter'
import { sanityConfig } from '@/lib/getProducts'
import imageUrlBuilder  from '@sanity/image-url';
import Image from 'next/image'
import { useEffect, useState } from 'react';
const builder = imageUrlBuilder(sanityConfig as any)
const CartItems = () => {
  const cart = useCart((state:any)=>state.cart)
  const increment = useCart((state:any)=>state.increment)
  const decrement = useCart((state:any)=>state.decrement)
  const removeItem = useCart((state:any)=>state.removeItem)
  const [isClient,setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true)
  },[])
  return (
    <div className='w-full h-full flex-1 flex flex-col items-center overflow-y-auto relative'>
      {
        isClient?cart.map((item:any,index:number)=>(
          <div key={item?._id} className={`w-[95%] flex gap-x-4  mt-8 ${index!==cart?.length-1&&'border-b dark:border-black'} pb-4`}>
            <Image className='object-contain h-auto w-auto' src={builder.image(item?.image).url()} alt={item?.name} height={50} width={55} priority/>
            <div className='flex-1'>
              <h3 className='text-[#607d8b] font-semibold text-[15px]'>{item?.name}</h3>
              <div className='grid grid-cols-3 w-[121.45px] h-[38px] border dark:border-black mt-2 text-[#3a3a3a] dark:text-slate-200'>
                <button className='flex h-full justify-center items-center  border-r dark:border-black text-[13px]' onClick={()=>decrement(item)}>-</button>
                <span className='h-full flex justify-center items-center  border-r dark:border-black text-[13px]'>{item?.quantity}</span>
                <button className='h-full flex justify-center items-center text-[13px]' onClick={()=>increment(item)}>+</button>
              </div>
            </div>
            <div className='flex flex-col justify-center items-end'>
              <button className='flex justify-center items-center w-[25px] h-[25px] rounded-[50%] border text-[#3a3a3a] dark:border-black dark:text-slate-200 text-[14px]' onClick={()=>removeItem(item?._id)}>x</button>
              <p className='text-[#3a3a3a] dark:text-slate-200 text-[15px] mt-2'>{formatPrice(item?.subTotal)}</p>
            </div>
          </div>
        )):<p className='my-[auto]'>No products in the cart</p>
      }
    </div>
  )
}

export default CartItems