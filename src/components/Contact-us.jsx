'use client'
import React, { useState } from 'react'

import Img from "@/assets/bg/h4.png"
import Image from 'next/image'
import axios from 'axios'

const ContactUs = () => {
  const [Status , setStatus] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = e.target[0].value
    let email = e.target[1].value
    let phone = e.target[2].value
    let message = e.target[3].value

    const res = await fetch('/api/sendEmail' , {
      method:"POST" , 
      headers:{ 'content-type' : "application/json" },
      body : JSON.stringify({name , email , phone , message})
    })
    
    await res.json().then(e => setStatus(e.status)) 

    setTimeout(() => {
      e.target[0].value = ''
      e.target[1].value = ''
      e.target[2].value = ''
      e.target[3].value = ''
      setStatus(false)
    }, 4000);
  };


  return (
    <section className='contact-us'>

      <div  className="h3"> Speak to Our Experts </div>
            <form className='container' onSubmit={handleSubmit} >
                <div data-aos='zoom-in'  className="image"> <Image src={Img} alt='contact-us' /> </div>
                <div className="inputs" data-aos='zoom-in'>
                  <div className="h3"> Reach out for clear, personalized real estate guidance. </div>
                  <div className="p">We are here to connect you with your ideal home or investment</div>

                  <input     type="text" placeholder='name' />
                  <input     type="email" placeholder='email' />
                  <input     type='tel' placeholder='phone' />
                  <textarea  placeholder='message' name='meesage' style={{ resize:"none" }}></textarea>
                  <button   className="btn" type='submit' > { Status ? <div className="load"> <span/> <span/> <span/> </div> : "Submit" } </button>
                </div>
            </form>
    </section>
  )
}

export default ContactUs