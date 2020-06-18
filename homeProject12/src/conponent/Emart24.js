import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchcu, fetchemart24} from "../actions/ConvinenceAction";

export default function Emart24(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchemart24())
    }, [])
    const emart_data = useSelector(state => state.product.emart24)
    const html = emart_data.map((m) =>
        <div className="col-md-4">
            <div className="thumbnail">
                <img src={m.image} alt="Lights" style={{"width": "100%"}}/>
                <div className="caption">
                    <p>{m.title}</p>
                    <p>{m.price}</p>
                </div>

            </div>
        </div>
    )
    return (
        <div className={"jumbotron-main text-center"} style={{"margin": "0px auto", "width": "900px"}} >
            <div style={{"background-color":"gray"}}>
            <h1 className={"text-center"} style={{"color":"yellow"}}>Emart</h1>
            </div>
            {html}
        </div>

    )
}