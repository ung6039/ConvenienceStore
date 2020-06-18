import React,{useEffect,useState,Fragment} from "react";
import {NavLink} from "react-router-dom";

function Header() {

    return(
        <Fragment>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink className="navbar-brand" to={"/"}>와라! 편의점</NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><NavLink exact  to={"/"}>HOME</NavLink></li>
                            <li><NavLink to={"/board"}>편의점 톡톡</NavLink></li>
                            <li><NavLink to={"/news"}>NEWS</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
export  default Header;
