import React, { useRef, useEffect } from 'react';
import "./Main_page.css";
import Navbar from './Navbar';
import Front_page from './Front_page';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Experience from './Experience';
import Footer from './Footer';

const Main_page = () => {


    // useEffect(() => {
    // })

    return (
        <>
            <Navbar />
            <Front_page />
            <About />
            <Skills />
            <Project />
            {/* <Experience /> */}
            <Footer />
        </>
    )
}

export default Main_page;