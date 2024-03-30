'use client' ;
import React, { useEffect, useState } from 'react'
import bgIntro from '@/assets/bgCover.jpg'

const Box = () => {
    const select1 = ['value1' , 'value2' , 'value3' , 'value4'] ;
  return (
    <div className='filter' data-aos='zoom-in' style={{backgroundImage: `url('${bgIntro.src}')`}} >
      <h1 data-aos='zoom-in' >Find your perfect property in Emirates.</h1>
      <ul>
        <li className='active btn'> residential & new development</li>
        <li className='btn'>commercial & development Land</li>
      </ul>
        <div className="box-search" data-aos="zoom-in" >
            
                <div className="radio" >
                    <input type='checkbox' name="buy" id="buy" />
                    <label htmlFor="buy">Buy</label>

                    <input type='checkbox' name="rent" id="rent" />
                    <label htmlFor="rent">rent</label>
                </div>

                <input type="search" name="" placeholder='search by location, postcode or development name' id="" />
                <button type='submit' >Search</button>

        </div>
        <div className="box-select">
        <BoxSelect classn='1' select={select1} icon='bx bxl-postgresql'  />
        <BoxSelect classn='2' select={select1} icon='bx bxl-postgresql'  />
        <BoxSelect classn='3' select={select1} icon='bx bxl-postgresql'  />

        </div>
        
    </div>
  )
}

const BoxSelect = ({select , icon , classn}) => {

    const [language , setlanguage] = useState(select[0])
    const handleSelect = (e)=>{
        setlanguage(e) ;
    }

    const handleShowSelect = (classn)=>{
      let selectbtn = document.querySelector(`.filter .select-${classn}`)
        if(selectbtn.classList.contains("show")) return selectbtn.classList.remove("show")
        selectbtn.classList.add("show")
    }
  return (

    <div className={`select select-${classn}`} onClick={_=>handleShowSelect(classn)}  >
        <div className='main' data-aos="zoom-in" > <div className="group-select"> <i className={icon}></i> {language}</div>   <i className='bx bxs-chevron-down '></i> </div>
        <div className="inner-select">
            
            { select.map((e,index)=>(
                    <span onClick={_=>handleSelect(e)} key={index} > {e} </span>
            ))}
            
        </div>
        </div>
)
}


export default Box