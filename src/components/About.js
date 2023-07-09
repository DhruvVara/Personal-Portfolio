import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about_container">
            <div className="bg-photo"></div>
            {/* <div className="photo">
        </div> */}
                <img src="/image/dhruv2.jpg" className="photo" />
            <div className="about">
                I am pursuing Masters in Computer Application and 
                I have done Bachelors in Computer Application. I am 
                web developer who Committed to continuous learning 
                and staying up-to-date with the latest industry
                 trends. I adapt the new things as well as new 
                technology efficiently and easily.
            </div>
        </div>
    )
}

export default About;