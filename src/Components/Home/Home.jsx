import React from 'react'
import avater from '../../assets/images/avataaars.svg'
import Star from '../star/Star'

export default function Home() {
  return (
    <>
    <div className="bg-mint vh-90 d-flex align-items-center justify-content-center">
      <div className="container text-center text-white d-flex align-items-center flex-column">
        <img src={avater} alt='avater' className='avater pb-4'/>
        <h2 className='fw-bold fs-1 text-uppercase'>start Framework</h2>
        <Star color={'text-white'} bgColor={'bg-white'}/>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>

    </div>
    
    </>
  )
}
