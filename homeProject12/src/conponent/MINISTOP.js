import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {fetchministop} from "../actions/ConvinenceAction";

export default function MINISTOP(props) {

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchministop())
    },[])
    const ministop_data = useSelector(state=>state.product.ministop)
    const html=ministop_data.map((m)=>
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
                <h1 className={"text-center"} style={{"color":"blue"}}>MINISTOP</h1>
            </div>
            {html}
        </div>

    )
}