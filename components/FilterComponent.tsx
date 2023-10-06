'use client'
import useView from '@/app_state/view'
import { faFilter, faList, faTh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import {usePathname, useRouter} from 'next/navigation'
// Function to set data in localStorage
//  const setLocalStorageItem = (key:string, value:string) => {
//   if (typeof window !== 'undefined') {
//     localStorage.setItem(key, JSON.stringify(value));
//   }
// };

// // Function to get data from localStorage
// export const getLocalStorageItem = (key:string) => {
//   if (typeof window !== 'undefined') {
//     const item = localStorage.getItem(key);
//     return item ? JSON.parse(item) : null;
//   }
//   return null;
// };
const FilterComponent = () => {
  const router = useRouter()
  const pathName = usePathname()
  const handleList = useView((state:any)=>state.listView)
  const handleGrid = useView((state:any)=>state.gridView)
  const [selectedValue,setSelectedValue]= useState('default')
  // useEffect(()=>{
  //   setLocalStorageItem('selectedValue',selectedValue)
  // },[selectedValue])
  useEffect(()=>{
    if (pathName==='/cart') return
    else if (pathName.startsWith('/product')) {
      return
    }
    router.push(`${pathName}/?sort=${selectedValue}`,{scroll:true})
  },[selectedValue,pathName])
  console.log(pathName);
  
  return (
    <div className='sticky bottom-0 bg-[#f8f8f8] border h-[65px] w-full flex justify-center items-center gap-x-3'>
        <select value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)} name="sort" className='border-none bg-transparent text-sm text-[#666] outline-none'>
            <option value="default">Default sorting</option>
            <option value={`_createdAt desc`}>Sort by latest</option>
            <option value={`price asc`}>Sort by price:low to high</option>
            <option value={`price desc`}>Sort by price:high to low</option>
        </select>
        <div className='text-lg font-bold'>
            <FontAwesomeIcon icon={faTh} color='#607d8b'  onClick={handleGrid}/>
            <FontAwesomeIcon icon={faList} className='ml-3' onClick={()=>handleList()} />
        </div>
    </div>
  )
}

export default FilterComponent