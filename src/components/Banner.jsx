import React from "react";
import "./Banner.css";

export const Banner = ({ title, backgroundImage }) => {
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="main-banner" style={bannerStyle}>
            <h1>{title}</h1>
        </div>
    );
};
