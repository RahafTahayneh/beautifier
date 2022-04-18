import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";

const Header = () => {
    return (
        <div className="header">
            <div >
                <span className="title_span"><img alt="logo" src={logo} className="title_img"/>Yembo Beautifier</span>
            </div>
            <div className="icons">
                <div className="icon red"/>
                <div className="icon yellow"/>
                <div className="icon green"/>
            </div>
        </div>
    )
}

export default Header;