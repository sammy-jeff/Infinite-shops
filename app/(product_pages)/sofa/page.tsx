import Products from "@/components/Products";
import { getProducts } from "@/lib/getProducts";


export default async function Sofa({searchParams}:{searchParams:{
  [key:string]:string|string[]|undefined
}}) {
  let query = encodeURIComponent(`*[_type=="products"&&category=="Sofa"]|order(${searchParams.sort})`)
  // let query = encodeURIComponent(`*[_type=="products"]|order(${searchParams.sort})`)
  const products =await getProducts(query)
  return (
    <main className="mt-12">
      <Products products={products}/>
    </main>
  )
}
