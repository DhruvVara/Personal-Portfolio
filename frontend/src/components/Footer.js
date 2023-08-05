import React, { useEffect, useState } from 'react';
import "./Footer.css";

const social_handles=[
  {
    name:"Git&Github",
    link:"https://github.com/DhruvVara"
  },
  {
    name:"Linkedin",
    link:"https://www.linkedin.com/in/dhruv-vara-681ba0213/"
  }
]

const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

function Footer() {

  const [day,setday]= useState();

  useEffect(()=>{
    const getday=new Date().getDay();
    setday(getday-1)
  },[])
  return (
    <>
      <footer>
        <h3>Thanks for visiting...</h3>
        <h4>Have a nice {days[day]}.</h4>
        <div className='social_handles'>
          Social Handle:
          {social_handles.map((item,i)=>{
            return(
              <a href={item.link} key={i} rel="noreferrer" target="_blank"><img alt={item.name} src={`image/${item.name}.svg`} /></a>

            )
          })}
        </div>
        <p>thedev.dhruv@outlook.com © Dhruv Vara | All rights Reserverd.</p>
      </footer>
    </>
  )
}

export default Footer;
