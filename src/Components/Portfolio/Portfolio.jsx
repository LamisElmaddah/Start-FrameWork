import React from 'react'
import imgOne from '../../assets/images/poert1.png'
import imgTwo from '../../assets/images/port2.png'
import imgThree from '../../assets/images/port3.png'
import Star from '../star/Star'
import Card from '../Card/Card'
export default function Portfolio() {
let images =[
  {id: 1 , img:imgOne},
  {id: 2 , img:imgTwo},
  {id: 3 , img:imgThree},
  {id: 4 , img:imgOne},
  {id: 5 , img:imgTwo},
  {id: 6 , img:imgThree},
]
  return ( <>
      <div className="vh-90 text-center py-5 d-flex align-items-center flex-column">
        <h2 className='fw-bold fs-1 text-uppercase blue'>portfolio component</h2>
        <Star color={'blue'} bgColor={'bg-blue'}/>
        <div className="container">
          <div className="row g-5">
            {images.map(img => <Card key={img.id} img={img}/>)}
            {images.map(img=><><div key={img.id} className="modal fade" id={img.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body p-0 rounded overflow-hidden">
        <img src={img.img} alt='' className='w-100 d-block'/>
      </div>
    </div>
  </div>
</div>
            </>)}
          </div>
        </div>
      </div>
    </>
    
  )
} 
