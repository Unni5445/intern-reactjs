import React from "react";
import './Footer.css';

function Footer(){
    return(
        <footer>
        <section className="left">
            <div className="logo"></div>
            <p>203, Abc road , xyz</p>
            <p> <strong>Phone :</strong>  +91 44 4269 2288</p>
            <p> <strong>Email :</strong> admin@parikshan.net.in</p>
        </section>
        <section className="right">

            <section className="splits">
                <section className="firstCol">
                    <li> <strong>Useful Link</strong> </li>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Training Registration</li>
                    <li>Home</li>
                    <li>Services</li>
                </section>
                <section className="secondCol">
                    <li>Support</li>
                    <li>Contact Us</li>
                </section>
                <section className="thirdCol">
                    <li><strong>Site Map</strong></li>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Training Registration</li>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Training Registration</li>
                </section>
            </section>
        <p className="copyright">Food Labs Inc. © Copyright 2022. All Rights Reserved.</p>
        </section>
    </footer>
    )
}

export default Footer;