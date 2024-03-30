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



const services = [
            {img: h1 , tag:"office space1" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h2 , tag:"office space2" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h3 , tag:"office space3" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h4 , tag:"office space4" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h1 , tag:"office space1" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h2 , tag:"office space2" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h3 , tag:"office space3" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h4 , tag:"office space4" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h4 , tag:"office space1" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h1 , tag:"office space2" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h2 , tag:"office space3" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h4 , tag:"office space4" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h4 , tag:"office space1" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h1 , tag:"office space2" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h2 , tag:"office space3" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h4 , tag:"office space4" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h1 , tag:"office space1" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
            {img: h2 , tag:"office space2" , price:"1,100,000" , h1:"Lorem ipsum dolor sit amet." , p:"consectetur adipisicing elit. Deserunt, a."} ,
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
    responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false
          }
        },
    ]
  };
const Deal_Build = () => {
  return (
    <div className='Deal_Build' >
        <div className="container">
            <div className="text">
                <div className="h3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit illum ipsam vel aliquid numquam!</div>
                <div className="btn"> Explore More </div>
            </div>
            <Slider {...settings} data-aos='zoom-in' >
                {
                    services.map((e,index)=> ( 
                    <div className='box' key={index} data-aos='zoom-in' > 
                     <Image src={e.img} alt={e.h1} />
                     <div className="price"> {e.price} </div>
                     <div className="h3"> {e.h1}  </div>
                     <div className="p"> {e.p} </div>
                    <Link className='btn' href="#"> Learn More </Link> 
                    </div> ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default Deal_Build