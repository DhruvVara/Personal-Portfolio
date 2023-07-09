import React from 'react';
import "./Project.css";

const project_details = [{
  name: "I-Note",
  details: 'I-Note is a website where user store their Notes, Thoughts or any Information.',
  tech: ["Reactjs", "Expressjs", "Nodejs", "MongoDB", "Rest API", "Thunder Client"],
  Link:"https://inoteweb.netlify.app",
}, {
  name: "Portfolio",
  details: "Razor payment technology is integrated in this website. This a demo Donation website where anyone can donate.",
  tech: ["react"],
  Link:"",
}]

const Project = () => {
  return (
    <>
      <div className='project_container'>
        <h1 className='heading'>Projects</h1>

        {project_details.map((obj) => {
          return (
            <>
              <div className='project_box'>
                <div className='p_left'>
                  <img src={`/image/${obj.name}.png`} loading='lazy' alt={obj.name} />
                </div>

                <div className='p_right'>
                  <h1>{obj.name}</h1>
                  <p>{obj.details}</p>

                  <h3>
                    Technologies Used:
                  </h3>
                  <ul>
                    {obj.tech.map((tech) => {
                      return (
                        <>
                          <li>{tech}</li>
                        </>
                      )
                    })}
                  </ul>
                  {obj.Link?<a href={`${obj.Link}`} rel="noreferrer" target="_blank">View</a> :""}
                  

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
