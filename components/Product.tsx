'use client'
import { sanityConfig } from '@/lib/getProducts'
import Image from "next/image";
import imageUrlBuilder  from '@sanity/image-url';
import React, { useEffect } from 'react'
import useView from '@/app_state/view';
import { formatPrice } from '@/helper/priceFormatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/app_state/cart';
import Link from 'next/link';
const builder = imageUrlBuilder(sanityConfig as any)

const Product = ({product}:{product:any}) => {
    const grid = useView((state:any)=>state.grid)
    const list = useView((state:any)=>state.list)
    const addItem = useCart((state:any)=>state?.addToCart)

    const {name,image,price,_id} =product
    
  return (
    <div className={`mt-12 w-full ${grid&&`flex flex-col`} ${list&&`flex gap-x-5`}`}>
            <div className={`group w-full ${list && 'flex-[1]'} relative overflow-hidden`}>
            <Image src={builder.image(product?.image).url()} alt={product.name} width={500} height={500} className='w-full h-auto object-contain inset-0 transform scale-100 transition-transform duration-300 hover:scale-110'  loading='lazy'/>
            <div className='absolute top-4 right-2 rounded-[50%] w-[2em] h-[2em] shadow-[0 4px 4px rgba(0, 0, 0, 0.15)] flex justify-center items-center bg-[#fff] opacity-0 group-hover:opacity-100 cursor-pointer' onClick={() => addItem({ name, _id, image, price, subTotal: price, quantity: 1 })}>
              <FontAwesomeIcon width={20} height={20} icon={faShoppingCart} color='#607d8b' />
            </div>
            <Link href={`/product/${_id}`} className='absolute top-4 right-2 mt-10 rounded-[50%] w-[2em] h-[2em] shadow-[0 4px 4px rgba(0, 0, 0, 0.15)] flex justify-center items-center bg-[#fff] opacity-0 group-hover:opacity-100 cursor-pointer'>
              <FontAwesomeIcon width={20} height={20} icon={faEye} color='#607d8b' />
            </Link>
      </div>
           <Link href={`/product/${_id}`} className={`py-2 ${list&&`flex-1 py-0 flex flex-col justify-center`}`}>
                <p className='text-[#3a3a3a] dark:text-slate-100 text-xs'>{product.category}</p>
                <p className='text-[#607d8b] text-[13.68px] font-semibold capitalize mt-2'>{product.name.toLowerCase()}</p>
                <p className='text-[#3a3a3a] dark:text-slate-100 font-bold text-[12.312px] mt-2'>{formatPrice(product.price)}</p>
                {list&&<p className='mt-2 text-[#3a3a3a] dark:text-slate-100 text-[13.68px]'>
                    {product.description?.substring(0,40)}..
                  </p>}
           </Link>
          </div>
  )
}

export default Product