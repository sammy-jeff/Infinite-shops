import Products from "@/components/Products";
import { getProducts } from "@/lib/getProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tables',
  description: 'Tables Category',
}
export default async function Tables({searchParams}:{searchParams:{
  [key:string]:string|string[]|undefined
}}) {
  let query = encodeURIComponent(`*[_type=="products"&&category=="Table"]|order(${searchParams.sort})`)
  const products =await getProducts(query)
  return (
    <main className="mt-12">
      <Products products={products}/>        
    </main>
  )
}
