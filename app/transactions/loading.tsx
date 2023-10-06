import SkeletonUI from '@/components/SkeletonUI'
import React from 'react'

const TransactionLoading = () => {
  return (
    <div className='lg:grid-cols-4 gap-y-4'>
        <SkeletonUI num={8}/>
    </div>
  )
}

export default TransactionLoading