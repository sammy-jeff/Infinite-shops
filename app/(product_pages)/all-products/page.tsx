import Products from "@/components/Products";
import { fetchProducts } from "@/lib/fetchProducts";
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
  // const products = await fetchProducts(searchParams,`[0...5]`)
  console.log(searchParams?.sort);
  
  return (
    <main className="mt-12">
      <Products products={products}/>   
    </main>
  )
}
