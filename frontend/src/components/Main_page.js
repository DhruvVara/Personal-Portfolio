import React from 'react';
import "./Main_page.css";
import Navbar from './Navbar';
import Front_page from './Front_page';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Footer from './Footer';

const Main_page = () => {


    return (
        <>
            <Navbar />
            <Front_page />
            <About />
            <Skills />
            <Project />
            <Footer />
        </>
    )
}

export default Main_page;