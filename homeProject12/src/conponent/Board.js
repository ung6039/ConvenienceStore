import React,{useEffect,useState} from "react";
import {fetchboard} from "../actions/ConvinenceAction";
import {useSelector,useDispatch} from "react-redux";

export default function Board(props){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchboard())
    },[])

    const board_data = useSelector(state => state.product.board)
    const html = board_data.map((m) =>
        <table className={"table"}>
           <tbody>
           <tr className={"table-color"}>
               <th>번호</th>
               <th colSpan={"4"} className={"text-center"}>제목</th>
               <th className={"text-center"}>글쓴이</th>
               <th className={"text-center"}>날짜</th>
           </tr>
           <tr className={"table-color"}s>
               <td>{m.no}</td>
               <td colSpan={"4"}>{m.title}</td>
               <td>{m.author}</td>
               <td>{m.regdate}</td>
           </tr>
           </tbody>
        </table>
    )
    return(
        <div className={"jumbotron-board text-center"}>
            <h1 style={{"background-color":"gray"}}>게시판</h1>
            {html}
        </div>
    )
}