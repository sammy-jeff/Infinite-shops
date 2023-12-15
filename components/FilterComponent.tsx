'use client'
import useView from '@/app_state/view'
import {  faList, faTh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
const FilterComponent = () => {
  // const router = useRouter()
  const pathName = usePathname()
  const { replace,push } = useRouter();
  const handleList = useView((state:any)=>state.listView)
  const handleGrid = useView((state:any)=>state.gridView)
  const searchParams = useSearchParams()
  const handleChange = (term:string)=>{
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('sort', term);
    } else {
      params.delete('sort');
    }
    replace(`${pathName}?${params.toString()}`);
  }
  
  return (
    <div className='sticky bottom-0 bg-[#f8f8f8] dark:bg-transparent dark:backdrop-blur-md dark:border-none border h-[65px] w-full flex justify-center items-center gap-x-3'>
        <select defaultValue={searchParams.get('sort')?.toString()} onChange={(e)=>handleChange(e.target.value)} name="sort" className='border-none bg-transparent text-sm text-[#666] dark:text-white dark:bg-[black] outline-none'>
            {/* <option value="default">Default sorting</option> */}
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