import SkeletonUI from '@/components/SkeletonUI'
import React from 'react'

const ChairLoading = () => {
  return (
    <div className='lg:grid-cols-4 gap-y-4'>
        <SkeletonUI num={7}/>
    </div>
  )
}

export default ChairLoading