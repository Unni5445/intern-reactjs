import React from "react";
import './Slider.css';
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import { MdCircle } from 'react-icons/md';

const Slider = ()=>{
    return (
        <div className="main">
             <section className="content">
            <MdNavigateBefore className="side1" />
            <MdNavigateNext className="side2" />
            <div className="content">
                <h1>Empowering Society Through Science</h1>
                <p>Food Lab is one point solution for all food safety needs</p>
                <button>Get Started</button>
                <div className="circle">
                    <MdCircle className="c1 active"/>
                    <MdCircle className="c1"/>
                    <MdCircle className="c1"/>
                    <MdCircle className="c1"/>
                    <MdCircle className="c1"/>
                </div> 
            </div>
            </section>
        </div>
    )
};

export default Slider;