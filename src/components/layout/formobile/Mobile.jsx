import React, { useContext } from 'react'
import { Context } from '../../ui/context/Context'
import { FaArrowLeft } from 'react-icons/fa'
import { MobileLeft } from './MobileLeft'
import { MobileRight } from './MobileRight'
export  function Mobile() {
  const {personClick , setPersonClick} = useContext(Context)
    return (
        <div className='h-full'>
            { personClick ? <MobileRight/> :
<MobileLeft />
}
        </div>
  )
}
