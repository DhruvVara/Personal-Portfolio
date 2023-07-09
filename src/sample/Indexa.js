import React, { useEffect, useRef } from 'react';
import './index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Indexa = () => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline();
    const wrpper = useRef(null);


    useEffect(() => {
        // t1.to(".wrapper", 5, { x: -window.innerWidth })
        //     .from(".section2 h2", 5, { opacity: 0, scale: 3 })
        //     .to(".wrapper", 5, { x: -window.innerWidth*2 })
        //     .from(".section3 h2", 5, { opacity: 0, scale: 3,skewX:50 })
        //     .to(".wrapper", 5, { x: -window.innerWidth*3 })
        //     .from(".section4 h2", 5, { opacity: 0, scale: 3,skewX:-50  })

        //     ScrollTrigger.create({
        //         animation: t1,
        //         trigger:".wrapper",
        //         start: "center center",
        //         end: "+=4000",
        //         markers:true,
        //         scrub: true,
        //         pin: true
        //     })

    }, [])
    return (
        <div className='wrapper' ref={wrpper}>
            <section className='section section1'>
                <h2>Section One</h2>
            </section>
            <section className='section section2'>
                <h2>Section Two</h2>
            </section>
            <section className='section section3'>
                <h2>Section Three</h2>
            </section>
            <section className='section section4'>
                <h2>Section Four</h2>
            </section>
        </div>
    )
}

export default Indexa
