import ProductContent from '@/components/ProductContent'
import RelatedProducts from '@/components/RelatedProducts'
import SkeletonUI from '@/components/SkeletonUI'
import { getProducts } from '@/lib/getProducts'
import React, {Suspense} from 'react'

export async function generateStaticParams(){
  const query = encodeURIComponent(`*[_type=="products"]`)
  const products = await getProducts(query)
  return products?.result?.map((product:any)=>({
    id:product?._id as string
  }))
}
const ProductInfo =async ({params}:{params:{id:string}}) => {
  const {id} =params
  const query = encodeURIComponent(`*[_type=='products' && _id=='${id}']`)
  const product = await getProducts(query)
  const {category} = product?.result[0]
  return (
    <main className='flex-1 flex justify-center py-12'>
      <div className='w-[93%] flex flex-col gap-y-5'>
          <section className='flex justify-center'>
            <ProductContent prod={product?.result[0]}/>
          </section>
          <section className='mt-10'>
            <h2 className='text-[clamp(28px,4vw,42px)] text-[#607d8b] font-semibold'>Related Products</h2>
            <Suspense fallback={<SkeletonUI num={3}/>}>
              <RelatedProducts category={category} id={id}/>
            </Suspense>
          </section>
      </div>
    </main>
  )
}

export default ProductInfo