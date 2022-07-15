import React, { useState } from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {

    const [subscribe, update] = useState("subscribe");
    const subs = () => {
        update("subscribed");
    }


    return (
        <>
            <nav class="navbar background  h-nav-resp">
                <ul className="nav-list">
                    <li><NavLink to="/" name="home" id="home">home</NavLink></li>
                    <li><NavLink to="/Blog" name="blog" id="blog">blog</NavLink></li>
                    <li><NavLink activeClassName="active_class" to="/About" name="about" id="about">about</NavLink></li>
                    <li><NavLink to="/contact" name="contact" id="contact">contact us</NavLink></li>
                    <li><a href="/login" name="login" id="login">login</a></li>
                </ul>
                <div class="rightnav v-class-resp">
                    <input type="text" name="search" id="search1" placeholder="search something" />
                </div>
                <div class="bargar">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </nav>
            <section class="background firstsection">
                <div class="box-main">
                    <div class="firsthalf">
                        <p class="text-big">The future of education is here</p>
                        <p class="text-small">in the world of 7 billion people we can educate new gneration of people so why
                            donyt you join our hand in ore to build a world?</p>
                        <div class="buttons">
                            <button class="btn" onClick={subs}><h1>{subscribe}</h1></button>
                            <button class="btn"><h1>watch video</h1></button>
                        </div>

                    </div>
                    <div class="secondhalf">
                        <img src="https://toppng.com/uploads/preview/computer-keyboard-and-mouse-icon-11549778001glpeo1dkdh.png" alt=" " />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar;


