import React from "react";
import style from "./Hero.module.css";

const Hero = () => {
    return (
        <div className = {style.hero}>
                <div className = {style.heading}>
                    <h1>100 Thousand Songs, ad-free</h1>
                    <h1>Over thousands podcast episodes</h1>
                </div>
                <img src = {require("../../assets/headphone.png")} alt = "logo" width={212} height={212} />
        </div>
    )
};

export default Hero;