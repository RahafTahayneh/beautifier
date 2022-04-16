import React from "react";
import "./styles.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <span><img alt="logo" src={logo} />ES6 Beautifier</span>
            </div>
            <div className="header-icons">
                <div className="header-icon red"/>
                <div className="header-icon yellow"/>
                <div className="header-icon green"/>
            </div>
        </div>
    )
}

export default Header;