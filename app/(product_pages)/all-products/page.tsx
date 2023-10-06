import Products from "@/components/Products";
import { getProducts } from "@/lib/getProducts";
import Link from "next/link";


export default async function Home({searchParams}:{searchParams:{
  [key:string]:string|string[]|undefined
}}) {
  let query = encodeURIComponent(`*[_type=="products"]|order(${searchParams.sort})`)
  const products =await getProducts(query)
  return (
    <main className="mt-12">
      <Products products={products}/>   
    </main>
  )
}
