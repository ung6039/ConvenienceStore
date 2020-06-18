import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import React,{useEffect,useState} from "react";
import {fetchseven} from "../actions/ConvinenceAction";

export default function SEVEN(props) {

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchseven())
    },[])

    const seven_data = useSelector(state=>state.product.seven)
    const html=seven_data.map((m)=>
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
                <h1 className={"text-center"} style={{"color":"green"}}>Seven</h1>
            </div>
            {html}
        </div>

    )
}