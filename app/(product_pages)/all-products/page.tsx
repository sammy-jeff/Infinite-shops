import Products from "@/components/Products";
import { getProducts } from "@/lib/getProducts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'All Products',
  description: 'Browse all the products in our inventory',
}
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
