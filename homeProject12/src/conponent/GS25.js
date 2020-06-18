import {FETCH_GS25} from "../actions/types";
import Fragment from "react"
import {fetchgs25} from "../actions/ConvinenceAction"
import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

export default function GS25(props) {

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchgs25())
    },[])

    const gs25_data = useSelector(state=>state.product.gs25)
    const html=gs25_data.map((m)=>
        <div className="col-md-4">
            <div className="thumbnail">
                <NavLink to={"/detail/"+m.no}>
                <img src={m.image} alt="Lights" style={{"width":"100%"}}/>
                </NavLink>
                <div className="caption">
                     <p>{m.title}</p>
                     <p>{m.price}</p>
                </div>
            </div>
        </div>
    )
    return (
        <div className={"jumbotron-main text-center"} style={{"margin":"0px auto","width":"900px"}}>
            <div style={{"background-color":"gray"}}>
                <h1 className={"text-center"} style={{"color":"orange"}}>GS25</h1>
            </div>
            {html}
        </div>

    )
}