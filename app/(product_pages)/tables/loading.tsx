import SkeletonUI from '@/components/SkeletonUI'
import React from 'react'

const TableLoading = () => {
  return (
    <div className='lg:grid-cols-4 gap-y-4'>
        <SkeletonUI num={7}/>
    </div>
  )
}

export default TableLoading