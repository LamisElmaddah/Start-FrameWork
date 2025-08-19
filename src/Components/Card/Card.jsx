import React from 'react'

export default function Card(props) {
    let { img } = props

  return (
    <>
            <div className="mycard col-lg-4 col-md-6">
                <div data-bs-toggle="modal" data-bs-target={`#${img.id}`} className="inner position-relative rounded overflow-auto">
                <img src={img.img} alt={img.id} className='w-100 rounded-2F'/>
                <div className="layer position-absolute top-0 start-0 end-0 bottom-0 text-white align-content-center">
                    <i className='fa fa-plus fa-2xl fs-1'></i>
                </div>
                </div>
            </div>

    </>
  )
}
