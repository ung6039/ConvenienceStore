import React, {Fragment, useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchboard, fetchTotal} from '../actions/ConvinenceAction'
import axios from 'axios'
import {NavLink} from "react-router-dom";
import {FETCH_BOARD, FETCH_TOTAL} from "../actions/types";
import {gs25_logo} from '../img/gs25_logo.jpg'
export default function Home(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
           dispatch(fetchTotal())
    },[])
    return (
        <div className="text-center">
            <div className={"jumbotron text-center"}>
            <h1>편의점 끝판왕</h1>
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
                   <NavLink to={"/"}>
                       <img src={require('../img/minstop_logo.jpg')} width={"300"} height={"300"}/>
                   </NavLink>
                </div>
                <div className={"col-md-6"}>
                    <NavLink to={"/emart24"}>
                        <img src={require('../img/emart24_logo.png')} width={"300"} height={"300"}/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}