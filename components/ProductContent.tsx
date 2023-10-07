"use client"
import { useCart } from '@/app_state/cart';
import { formatPrice } from '@/helper/priceFormatter';
import { sanityConfig } from '@/lib/getProducts';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons/faCcMastercard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imageUrlBuilder  from '@sanity/image-url';
import Image from 'next/image';
import React, { useState } from 'react'
const builder = imageUrlBuilder(sanityConfig as any)
const ProductContent = ({prod}:{prod:any}) => {
  const addItem = useCart((state:any)=>state?.addToCart)
  const [num,setNum] = useState(1 as number)
  const [loading,setLoading] = useState(false)
  const addProductToCart = async () => {
      const item = {
      name: prod?.name,
      image: prod?.image,
      _id: prod?._id,
      price: prod?.price,
      subTotal: prod?.price * num,
      quantity: num,
    };
  
    try {
      setLoading(true); // Set loading state to true
  
      // Simulate a delay (e.g., 1 second) to mimic data fetching
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      // Once the delay is done, add the item to the cart
      addItem(item);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading state back to false after data "fetch"
    }
  };
  
  return (
    <div className='grid grid-cols-1 h-[100%] lg:grid-cols-2 lg:w-[80%] bg-white overflow-auto dark:bg-slate-900'>
        <div className='w-full overflow-hidden'>
        <Image src={builder.image(prod?.image).url()} alt={prod.name} width={500} height={500} priority className='w-full h-full object-cover inset-0 transform scale-100 transition-transform duration-300 hover:scale-110'/>
        </div>
        <div className='p-4 relative flex flex-col'>
          <div className='flex-1'>
          <span className='text-[#78909c] font-semibold text-[12px]'>{prod?.category}, {prod?.sub_category}</span>
          <h2 className='text-[#607d8b] mt-2 font-bold text-[clamp(16px,4vw,24px)]'>{prod?.name}</h2>
          <h3 className='mt-2 text-[#3a3a3a] dark:text-slate-200 font-semibold'>{formatPrice(prod?.price)}</h3>
          <p className='text-[#3a3a3a] dark:text-slate-200 mt-2 text-[clamp(13.6px,4vw,16px)]'>{prod?.description}</p>
          </div>
          <div className='mt-3 lg:mb-4'>
              <FontAwesomeIcon className='text-[2.5rem] text-[rgb(37,87,214)]' icon={faCcVisa} width={50} height={50} />
              <FontAwesomeIcon icon={faCcMastercard} color='red' className='text-[2.5rem] ml-3' width={50} height={50}/>
            </div>
          <div className='mt-2 lg:mt-0 flex items-center gap-4'>
          <div className='grid grid-cols-3 w-[121.45px] h-[38px] border dark:border-black'>
                <button className='flex h-full justify-center items-center  border-r dark:border-black text-[#3a3a3a] dark:text-slate-200 text-[13px]' onClick={()=>setNum((prev:number)=>prev<=1?1:prev-1)}>-</button>
                <span className='h-full flex justify-center items-center  border-r dark:border-black text-[#3a3a3a] dark:text-slate-200 text-[13px]'>{num}</span>
                <button className='h-full flex justify-center mt-auto items-center text-[#3a3a3a] dark:text-slate-200 text-[13px]' onClick={()=>setNum((prev:number)=>prev+1)}>+</button>
              </div>
              <button className='flex items-center py-1 px-2 text-[#607d8b] border-[2px] border-[#607d8b]' onClick={addProductToCart}>{loading?`Please wait...`:`Add to cart`}</button>
          </div>
        </div>
    </div>
  )
}

export default ProductContent