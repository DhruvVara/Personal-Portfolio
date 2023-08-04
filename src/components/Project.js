import React from 'react';
import "./Project.css";

const project_details = [{
  name: "I-Note",
  details: 'I-Note is a web-application where user store their Notes, Thoughts or any Information.',
  tech: ["Reactjs", "Expressjs", "Nodejs", "MongoDB", "Rest API", "Thunder Client"],
  Link:"https://inoteweb.netlify.app",
}, {
  name: "Portfolio",
  details: "This is the personal portfolio website where I showcase my skills and projects that I have made.",
  tech: ["Reactjs", "Expressjs", "Nodejs", "MongoDB", "Rest API", "Thunder Client"],
  Link:"",
},
{
  name:"Razorpay Integration Payment",
  details:'This is a Dnation website where i integrated Razor Payment System. This is just a demo website.',
  tech:["Reactjs","Expressjs","Nodejs","Razorpay API"],
  Link:"https://razorpay-payment-integration.netlify.app/"
}]

const Project = () => {
  return (
    <>
      <div className='project_container'>
        <h1 className='heading'>Projects</h1>

        {project_details.map((obj,i) => {
          return (
            <>
              <div key={i} className='project_box'>
                <div className='p_left'>
                  <img src={`/image/${obj.name}.png`} loading='lazy' alt={obj.name} />
                </div>

                <div className='p_right'>
                  <div className='right_top'>
                  <h1>{obj.name}</h1>
                  <p>{obj.details}</p>

                  <h3>
                    Technologies Used:
                  </h3>
                  <ul>
                    {obj.tech.map((tech,j) => {
                      return (
                        <>
                          <li key={j}>{tech}</li>
                        </>
                      )
                    })}
                  </ul>
                  </div>
                  <div className='right_bottom'>

                  {obj.Link?<a href={`${obj.Link}`} rel="noreferrer" target="_blank">View</a> :""}
                  </div>
                  

                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Project;
