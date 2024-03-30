import "../style/style.css"
import Intro from '@/components/Intro'
import Alert from '@/assets/bg/1.jpg'

import Image from "next/image";
import Img1 from "../assets/icon/11.png"
import Img2 from "../assets/icon/12.png"
import Img3 from "../assets/icon/13.png"
import Img4 from "../assets/icon/14.png"

import b1 from '@/assets/bg/1.jpg'
import b2 from '@/assets/bg/2.jpg'
import b3 from '@/assets/bg/3.jpg'
import b4 from '@/assets/bg/4.jpg'
import b5 from '@/assets/bg/5.jpg'


import aboutus from "../assets/about-us/1.jpg"
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/Contact-us"
import Footer from "@/components/Footer";
import Box from "@/components/helpers/Box";
import Link from "next/link";
import Services from "@/components/Services";

export const metadata = {
  title: "Real Estate",
  description: "Real Estate",
};


const real_services = [
  {img:b1 , cat:"Lorem ipsum dolor ."} ,
  {img:b2 , cat:"Lorem ipsum dolor ."} ,
  {img:b3 , cat:"Lorem ipsum dolor ."} ,
  {img:b4 , cat:"Lorem ipsum dolor ."} ,
]

/*

    2 images in about us    : 800w * 600h
    4 images in services    : 400w * 400h
    1 image in contact us   : 600w * 700h
    1 logo                  : 150w * 100h
    1 image in ('Curious About Your Property’s Market Value?') :  1600h * 400h

 */

export default function Home() {
  return (
    
    <main>
      
      <Intro />
      <Box />

      <section className="about">
        <div className="container">
          <div className="img" data-aos="fade-right" > <Image src={aboutus} alt="about-us" /></div> 
          <div className="text"data-aos="fade-left" >
            <span> About us</span>
            <div className="h3">With over 20 years of crafting exceptional property experiences,</div>
            <div className="p"> Lime Brook simplifies your property transactions with comprehensive buying, selling, and leasing services optimized for maximum ROI.</div>
          </div>
        </div>

        <div className="container">
          <div className="img" data-aos="fade-right" > <Image src={aboutus} alt="about-us" /></div> 
          <div className="text"data-aos="fade-left" >
            <div className="h3">We don't just create transactions, We build lifelong partnerships and success storie. </div>
            <div className="p">Our team, armed with deep market insights, pledges a bespoke experience, seamlessly aligned with your unique aspirations.</div>
            <a href="/about-us" className="btn">about us</a>
          </div>
        </div>
      </section>


      <section className="point-selling">
          <ul className="container">
            <li data-aos="fade-up" data-aos-delay="200" > <Image src={Img1} alt="200+ Trusted Clients" />   <span> 20 Years of Excellence Decades of Trust </span> </li>
            <li data-aos="fade-up" data-aos-delay="300" > <Image src={Img2} alt="15+ Years of Expertise" /> <span> Exclusive Listings Unique Property Access  </span> </li>
            <li data-aos="fade-up" data-aos-delay="400" > <Image src={Img3} alt="700+ Successful Cases" />  <span> Market Insight Informed Investment Advice  </span> </li>
            <li data-aos="fade-up" data-aos-delay="500" > <Image src={Img4} alt="Competitive Pricing" />    <span> Customized Financing Flexible Financial Solutions  </span> </li>
          </ul>
      </section>


      {/* Services */}
      <div className="real-services">
        <div className="h2"> Serivces</div>
        <div className="container">
          {real_services.map((e,index)=>(
            <div className="box" key={index}>
              <Image src={e.img} alt="" />
              <div className="h3"> {e.cat} </div>
            </div>
          ))}
        </div>
      </div>

      {/* property */}
      <Services />


      <div className="alert">
        <div className="bgCover"> <Image src={Alert} alt="alert"  /> </div>
        <div className="container">
          <div className="h3">Curious about your property’s market value?</div>
          <div className="p">Get expert evaluations for all property types, with insights across local to global markets.</div>
          <div className="btn-group">
            <Link href="/contact-us" className="btn">conatct us</Link>
          </div>
        </div>
      </div>


      <Testimonials />

      <ContactUs />

      <Footer />

    </main>
  );
}
