import SkeletonUI from '@/components/SkeletonUI'
import React from 'react'

const AllProdLoading = () => {
  return (
    <div className='lg:grid-cols-4 gap-y-4'>
        <SkeletonUI num={7}/>
    </div>
  )
}

export default AllProdLoading