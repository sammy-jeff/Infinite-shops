import { getProducts } from '@/lib/getProducts'
import React from 'react'
import Products from './Products'

const HomePLatestProducts =async () => {
    let query = encodeURIComponent(`*[_type=="products"][0...4]|order(_createdAt desc)`)
    const products = await getProducts(query)
    // await new Promise(resolve=>setTimeout(resolve,5000))
  return (
    <Products products={products}/>
  )
}

export default HomePLatestProducts