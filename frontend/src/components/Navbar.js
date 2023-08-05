import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { gsap, Power1 } from "gsap";
import axios from "axios";

const host = "";

const Navbar = () => {
    // let timeline=gsap.timeline();
    let list = useRef(null);
    let logo = useRef(null);

    const [view, setview] = useState(false);
    const [input, setinput] = useState({
        username: "",
        email: "",
        description: ""
    })

    const [menu, setmenu] = useState(false);

    useEffect(() => {
        gsap.fromTo(logo, { duration: 1, opacity: 0, y: -30, ease: Power1.inOut }, { opacity: 1, y: 0 }, "0.5")
        gsap.fromTo(list, { duration: 1, opacity: 0, y: -30, ease: Power1.inOut }, { opacity: 1, y: 0 }, "1")

    })


    const handlechange = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

            const res = await axios.post(`${host}/api/contact`, {
                name: input.username,
                email: input.email,
                description: input.description
            })

            if (res) {
                alert("seccessfully submitted")
            }

            setinput({ username: "", email: "", description: "" })
            setview(false)
        

    }


    const handlecontact = () => {
        if (!view) {
            setview(true)
            setmenu(false)
        }

    }

    // for menu bar
    const handleclick = () => {
        if (menu) {
            setmenu(false)
        } else {
            setmenu(true)
        }
    }

    const handleclose = () => {
        setinput({ username: "", email: "", description: "" })
        setview(false)

    }



    return (
        <>
            <div className="main_navbar " >
                <div className="left_nav">
                    {/* <div className="logo" ref={el => logo = el}></div> */}
                    <img src="./image/name_logo.png" alt="logo..." className="logo" ref={el => logo = el} />
                </div>

                <div className={`right_nav ${!menu ? "close_nav" : ""}`}>
                    <ul ref={el => list = el}>
                        <li ><a href="Resume.pdf" download="Resume.pdf" onClick={() => setmenu(false)} >Resume</a></li>
                        <li onClick={() => handlecontact()}>Contact</li>
                    </ul>
                </div>

                <div className="menu" onClick={handleclick} >
                    {!menu ? <><img src="/image/icon.png" alt="Menu" /></> : <>
                        <div className="line"></div>
                        <div className="line"></div></>}
                </div>

                <div className={`backfilter ${view ? "backfilter_opn" : ""}`}>
                </div>
                <form onSubmit={handlesubmit} className={`contact ${view ? 'cant' : ""} `} >
                    <div className="form">
                        <h1>Contact Me</h1>
                        <div className="center">

                            <div className="nme detail">
                                <label className="label" htmlFor="username">Name</label>
                                <input type="text" name="username" value={input.username} id="nme" className="input" onChange={handlechange} autoComplete="off"  required/>
                            </div>
                            <div className="email detail">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" value={input.email} className="input" onChange={handlechange} autoComplete="off"  required/>
                            </div>
                            <div className="description detail">
                                <label htmlFor="description">Description</label>
                                <textarea className="input textarea" name="description" value={input.description} rows="5" onChange={handlechange} autoComplete="off" required />
                            </div>
                        </div>
                    </div>

                    <div className="btn_space">
                        <button className="send btn" type="submit">Send</button>
                        <button className="close btn" onClick={handleclose}>Close</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Navbar;