import React, { useEffect, useState } from 'react';
import "./Footer.css";

const social_handles=[
  {
    name:"github",
    link:"https://github.com/DhruvVara"
  },
  {
    name:"linkedin",
    link:"https://github.com/DhruvVara"
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
          {social_handles.map((item)=>{
            return(
              <a href={item.link} rel="noreferrer" target="_blank"><img src={`image/${item.name}.svg`} /></a>

            )
          })}
        </div>
        <p>thedev.dhruv@outlook.com © Dhruv Vara | All rights Reserverd.</p>
      </footer>
    </>
  )
}

export default Footer;
