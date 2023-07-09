import React, { useRef, useEffect } from "react";
import "./Front_page.css";
import { gsap, Power1 } from "gsap";

const s_handles = [
    {
        name: "github",
        link: "https://github.com/DhruvVara"
    },
    {
        name: "linkedin",
        link: "www.linkedin.com/in/dhruv-vara-681ba0213"
    }
]

const Front_page = () => {
    let imge = useRef(null);
    let name = useRef(null);


    useEffect(() => {
        gsap.fromTo(imge, { opacity: 0, ease: Power1.inOut }, { opacity: 1, }, 2)
        gsap.fromTo(".name", {
            opacity: 0,
            y: 5
        }, {
            opacity: 1,
            y: 0
        }, "+=0.2")

        gsap.fromTo(".web_dev", {
            opacity: 0,
            y: 5
        }, {
            opacity: 1,
            y: 0
        }, "+=0.5")

        gsap.fromTo(".quote", {
            opacity: 0,
            y: 5
        }, {
            opacity: 1,
            y: 0
        }, "+=0.7")

        gsap.fromTo(".social_handles_img", {
            opacity: 0,
            y: -5
        }, {
            opacity: 1,
            y: 0
        }, "+=0.8")

        // gsap.fromTo(".github", {
        //     opacity: 0,
        //     y: -5
        // }, {
        //     opacity: 1,
        //     y: 0
        // }, "+=0.9")

        // gsap.fromTo(".social_handles",{
        //     opacity:1,
        // },{
        //     opacity:0,
        //     scrollTrigger:{
        //         trigger:".front_ppage_container",
               
        //     }
        // })

    })

    return (
        <div className="front_page_container" >
            {/* <div className="front_page"> */}
            <div className="details">
                <div className="name" ref={name}>Dhruv Vara</div>
                <div className="web_dev">Web Developer</div>
                <div className="quote">"Simplicity is the soul of effeciency."</div>
            </div>

            <div className="content_photo">
                <img src='image/main_page_photo.png' ref={el => imge = el} />
            </div>
            <div className="s_handle">
                {s_handles.map((item) => {
                    return (
                        <a className="social_handles_img" href={item.link} rel="noreferrer" target="_blank"><img src={`image/${item.name}.svg`} /></a>

                    )
                })}

                {/* <a className="social_handles github" href="https://github.com/DhruvVara" rel="noreferrer" target="_blank"><img src={`image/github.svg`} /></a>
                <a className="social_handles linkedin" href="https://github.com/DhruvVara" rel="noreferrer" target="_blank"><img src={`image/linkedin.svg`} /></a> */}
            </div>
            {/* </div> */}
        </div>

    )
}

export default Front_page;