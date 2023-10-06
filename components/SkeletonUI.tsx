import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonUI = ({num}:{num:number}) => {
    const arr = Array(num).fill(0)
  return (
    arr.map((_i,i)=>(
        <div key={i} className={`mt-12 w-full flex flex-col ${i!==arr.length-1&&'lg:mx-4'}`}>
            <div className='w-full flex-1 h-full'>
            <Skeleton width={200} height={300}/>
            </div>
            <div className='mt-2 flex flex-col gap-y-2'>
            <Skeleton count={3} height={50} width={300}/>
            </div>
        </div>
    ))
  )
}

export default SkeletonUI