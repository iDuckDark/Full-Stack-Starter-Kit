import React from "react";

const Footer = () => {
    return (
        <footer
            style={{
                textAlign: "center",
                backgroundColor: "#8e44ad",
                color: "#FFFFFF",
            }}
        >
            <a
                style={{
                    color: "#FFFFFF",
                }}
                href='https://github.com/iDuckDark/Full-Stack-Starter-Kit'
            >
                Copyright © by Nevin {new Date().getFullYear()} Built Source
                Code
            </a>
        </footer>
    );
};

export default Footer;
