import React from 'react'
import Star from '../star/Star'

export default function Contact() {
  return (
    <>
          <div className="vh-90 py-5">
            <div className="inner text-center">

            <h2 className='fw-bold fs-1 text-uppercase blue'>conatct section</h2>
            <Star color={'blue'} bgColor={'bg-blue'}/>
            <div className="container">
              <form className='w-50 mx-auto'>
                <input type="text" id="username" name="username" placeholder='User Name' className='form-control form-control-lg border-bottom border-0 mb-5'></input>
             
                    <input type="number" id="uage" name="uage" placeholder='User Age' className='form-control form-control-lg  mx-auto border-0 border-bottom mb-5 ' />
                    <input type="email" id="uemail" name="uemail" placeholder='User Email' className='form-control form-control-lg  mx-auto border-0 border-bottom mb-5 ' />
                    <input type="password" id="upass" name="upass" placeholder='User Password' className='form-control form-control-lg  mx-auto border-0 border-bottom mb-5 ' />
                    <button className="btn bg-mint d-block text-white ">send Message</button>
              </form>
            </div>
            </div>
            </div>
     </>
  )
}
