import { getProducts } from '@/lib/getProducts'
import React from 'react'
import Product from './Product'

const RelatedProducts =async ({category,id}:{category:string,id:string}) => {
    const query = encodeURIComponent(`*[_type=='products' && category =='${category}'][0...4]`)
  const products = await getProducts(query)
  const filteredProducts = products?.result?.filter((product:any)=>product?._id!==id)
 
  
  return (
    <div className='lg:grid lg:grid-cols-4 gap-x-6'>
        {filteredProducts?.map((product:any)=>(
            <Product product={product} key={product?._id}/>
        ))}
    </div>
  )
}

export default RelatedProducts