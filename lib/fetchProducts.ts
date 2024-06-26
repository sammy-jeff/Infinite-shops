'use server'

import { getProducts } from "./getProducts"

export async function fetchProducts(sort:{
    [key:string]:string|string[]|undefined
  },next:string) {
    let query = encodeURIComponent(`*[_type=="products"]${next}|order(${sort?.sort})`)
    const products = await getProducts(query)
    return products
}