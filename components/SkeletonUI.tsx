import React from 'react'
const SkeletonUI = ({num}:{num:number}) => {
    const arr = Array(num).fill(0)
  return (
    <div className='grid lg:grid-cols-3 lg:gap-x-4 mb-4'>
        {arr.map((_i,i)=>(
        <div key={i} className={`mt-12 w-full flex flex-col h-[250px] ${i!==arr.length-1&&'lg:mx-4'} animate-pulse`}>
            <div className='w-full flex-[1] h-full bg-gray-400'/>
            <div className='mt-2 flex h-3 w-full bg-gray-400'/>
            <div className='mt-2 flex h-3 w-full bg-gray-400'/>
            {/* <div className='mt-2 flex h-3 w-full bg-gray-600'/> */}
        </div>
    ))}
    </div>
  )
}

export default SkeletonUI