'use client' ;
import React, { useState } from 'react'

const Box = () => {
    const select1 = ['value1' , 'value2' , 'value3' , 'value4'] ;
  return (
    <div className='filter'>
        <div className="container">
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
        <BoxSelect select={select1} icon='bx bxl-postgresql'  />
        <BoxSelect select={select1} icon='bx bxl-postgresql'  />
        <BoxSelect select={select1} icon='bx bxl-postgresql'  />

        </div>
        </div>
        
    </div>
  )
}

const BoxSelect = ({select , icon}) => {
    const [language , setlanguage] = useState(select[0])
    const handleSelect = (e)=>{
        setlanguage(e) ;
    }

  return (

    <div className="select"   >
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