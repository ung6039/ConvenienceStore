import React, {Fragment, useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchboard, fetchTotal} from '../actions/ConvinenceAction'
import axios from 'axios'
import {NavLink} from "react-router-dom";
import store from '../img/convinence_store.jpg'
import {convinence} from '../img/convinence_store.jpg'
import {FETCH_BOARD, FETCH_TOTAL} from "../actions/types";

export default function Home(props) {
    var sectionStyle ={
        width:"100%",
        height:"400px",
        backgroundImage:'url("${store}")'
    }
    const dispatch = useDispatch()
    useEffect(()=>{
           dispatch(fetchTotal())
    },[])
    return (
        <div className="text-center">
            <div className={"jumbotron-main text-center"} style={{sectionStyle}} >
                <div style={{"background-color":"gray"}} width={"50"}>
                <h1 style={{"color":"white"}}>편의점 끝판왕</h1>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-md-6"} sytle={{"width":"100px"}}>
                  <NavLink to={"/gs25"}>
                    <img src={require('../img/gs25_logo.jpg')} width={"300"} height={"300"} />
                  </NavLink>
                </div>
                <div className={"col-md-6"}>
                    <NavLink to={"/cu"}>
                        <img src={require('../img/cu_logo.jpg')} width={"300"} height={"300"}/>
                    </NavLink>
                </div>
                <div className={"col-md-6"}>
                   <NavLink to={"/ministop"}>
                       <img src={require('../img/minstop_logo.jpg')} width={"300"} height={"300"}/>
                   </NavLink>
                </div>
                <div className={"col-md-6"}>
                    <NavLink to={"/emart24"}>
                        <img src={require('../img/emart24_logo.png')} width={"300"} height={"300"}/>
                    </NavLink>
                </div>
                <div className={"col-md-6"}>
                    <NavLink to={"/seven"}>
                        <img src={require('../img/seven_logo.png')} width={"300"} height={"300"}/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}