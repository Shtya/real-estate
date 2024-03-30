'use client'
import React from 'react';


import bgIntro from '@/assets/bg/intro1.jpg'
import Image from 'next/image';
import Box from './helpers/Box';
import { useRouter } from 'next/navigation';


export default function Intro() {
    const {push} = useRouter()

  return (

    <div className='intro-slide'>
        <div className="bgCover"><Image src={bgIntro} alt="bg" /></div>
        <div className="container">

            <div className="text">
            
                <div class='h6' > <span>Crafting Exceptional</span> <span>Real Estate</span> <span>Experiences for 20+ Years in the UAE and Beyond Buy, Sell, Rent with The Best</span></div>
                <div className="btn">Contact us</div>
            </div>
            <ul className='social' >
                <li> <i  onClick={_=> push("https://www.linkedin.com/company/102312693")} className='bx bxl-linkedin' ></i> </li>
                <li> <i  onClick={_=> push("https://www.instagram.com/albarshaalmoshriqa/")} className='bx bxl-instagram-alt' ></i> </li>
                <li> <i  onClick={_=> push("https://www.facebook.com/ALBARSHAALMOSHRIQA")} className='bx bxl-facebook'></i> </li>
            </ul>

        </div>
    </div>
  );
}
