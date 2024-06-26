import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HomeLoading = () => {
  return (
    <FontAwesomeIcon icon={faSpinner} className='mx-auto my-auto text-[#607d8b] text-[clamp(28px,4vw,42px)] font-bold animate-spin'/>
        
  )
}

export default HomeLoading