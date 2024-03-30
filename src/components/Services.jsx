'use client' ;
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import h1 from '@/assets/bg/h1.png'
import h2 from '@/assets/bg/h2.png'
import h3 from '@/assets/bg/h3.png'
import h4 from '@/assets/bg/h4.png'

import Image from 'next/image';
import Link from 'next/link';




const Services = () => {
    const [idx , setidx] = useState(0) ;


    const services = [
        {
            type:'sale' , data : [
                {img: h1 , tag:"office space1" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h2 , tag:"office space2" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h3 , tag:"office space3" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h4 , tag:"office space4" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h1 , tag:"office space1" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h2 , tag:"office space2" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h3 , tag:"office space3" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h4 , tag:"office space4" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            ],
        },
        {
            type:'rent' , data : [
                {img: h4 , tag:"office space1" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h1 , tag:"office space2" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h2 , tag:"office space3" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h4 , tag:"office space4" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h4 , tag:"office space1" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h1 , tag:"office space2" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h2 , tag:"office space3" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h4 , tag:"office space4" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            ],
        },
        {
            type:'buy' , data : [
                {img: h1 , tag:"office space1" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h2 , tag:"office space2" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h3 , tag:"office space3" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h4 , tag:"office space4" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h1 , tag:"office space1" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h2 , tag:"office space2" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h3 , tag:"office space3" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
                {img: h4 , tag:"office space4" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            ],
        },
    ]
    var settings = {
        dots: true,
        slidesToScroll: 1 ,
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: false,
        // speed: 7000,
        // autoplaySpeed: 7000,
        lazyload: true,
        pauseOnHover: false ,
        adaptiveHeight: true,
        rows: 2 ,
        responsive: [
            {
              breakpoint: 4000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
      };

      
  return (
    <div className='Services'>
        <div className="container">
            <div className="h2" data-aos='zoom-in' > Discover Property in The UAE </div>
            <div className='header'>
                <ul data-aos='zoom-in' > {services.map((e,index)=> ( <li  key={index} onClick={_=> setidx(index)} className={`btn ${idx == index ? 'active' : ""}`} > {e.type} </li> ))} </ul>
                <a href='#' className='btn' data-aos='zoom-in' > More Property </a>
            </div>
        </div>

        <Slider {...settings} data-aos='zoom-in' >
                {
                    services[idx].data.map((e,index)=> ( 
                    <div className='box' key={index} data-aos='zoom-in' > 
                     <Image src={e.img} alt={e.h1} />
                     <div className="price"> {e.price} </div>
                     <div className="h3"> {e.h1}  </div>
                     <div className="p"> {e.p} </div>
                     <ul>
                        <li> <Link href="#"> <i className='bx bxs-envelope' ></i> <span> E-mail </span> </Link> </li>
                        <li><Link href="#"> <i className='bx bxs-phone' ></i> <span> phone </span> </Link> </li>
                        <li><Link href="#"> <i className='bx bxl-whatsapp' ></i> <span> whatsApp </span> </Link> </li>
                     </ul>
                    </div> ))
                }
            </Slider>

            

        
    </div>
  )
}




export default Services