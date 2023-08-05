import React from 'react';
import "./Skills.css";

const name = [
    "HTML","CSS", "Javascript","Reactjs", "Mongo db","Java","Mysql","Express js","Nodejs","Rest API","Git&Github"
]


const Skills = () => {



    return (
        <>
            <div className='skill_container'>
                <div className='skill_box'>
                    {/* <img src='image/skills.jpeg'/> */}
                    <h1>What I do</h1>
                    <p>I am from Veraval, Gujarat and right now living in Baroda. Currently, I am pursuing Master's in Computer Application. I am a web Developer.</p>
                    <div className='skills'>
                        <div className='skills_left'><div className='skill_name'>Skills</div></div>
                        <div className='center'>
                            {name.map((nme,id) => {
                                return (
                                    
                                        <div className='box' key={id}><img src={`/image/${nme}.svg`} loading='lazy' alt={`${nme}`}/>{nme}</div>
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Skills;
