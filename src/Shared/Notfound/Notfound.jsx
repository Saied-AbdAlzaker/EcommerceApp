import React from 'react'
import errImg from '../../Assets/images/error.svg'

export default function Notfound() {
  return (
    <div className='d-flex justify-content-center align-items-center '>
      <img src={errImg} alt="errImg" />
    </div>
  )
}
