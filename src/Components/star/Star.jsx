import React from 'react'

export default function (props) {
let {color , bgColor}=props;

  return (
    <>
    <div className="d-flex justify-content-center my-2 py-3 ">
        <div className={`line ${bgColor}`}></div>
        <i className={`fa-solid fa-star mx-3 ${color}`}></i>
        <div className={`line ${bgColor}`}></div>
    </div>
    </>
  )
}
