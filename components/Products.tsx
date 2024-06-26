"use client"
import React from 'react'
import Product from './Product'

import useView from '@/app_state/view'


const Products =({products}:{products:any}) => {
    const list = useView((state:any)=>state.list)
    const grid = useView((state:any)=>state.grid)
  return (
    <section className={`min-h-full lg:grid ${grid&&`lg:grid-cols-4`} lg:gap-x-6 ${list ? 'lg:grid-cols-3' : ''}`}>
        {products?.result?.map((product:any)=>{
          return <Product product={product} key={product?._id}/>
        })}
      </section>
  )
}

export default Products