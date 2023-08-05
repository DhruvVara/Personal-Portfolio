import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about_container">
            <div className="bg-photo"></div>
            {/* <div className="photo">
        </div> */}
                <img src="/image/dhruv.jpg" className="photo" alt="img" />
            <div className="about">
                I am pursuing Masters in Computer Application and 
                I have done Bachelors in Computer Application. I am 
                web developer who Committed to continuous learning 
                and staying up-to-date with the latest industry
                 trends. I am adapting the new skills as well as new 
                technology efficiently and easily.
            </div>
        </div>
    )
}

export default About;