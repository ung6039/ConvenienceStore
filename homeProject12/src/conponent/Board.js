import React,{useEffect,useState} from "react";
import {fetchboard} from "../actions/ConvinenceAction";
import {useSelector,useDispatch} from "react-redux";

export default function Board(props){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchboard())
    },[])

    const board_data = useState(state => state.product.board)
    const html = board_data.mpa((m) =>
        <table className={"table"}>
           <tbody>
           <tr>
               <th>번호</th>
               <th colSpan={"4"}>제목</th>
               <th>제목</th>
               <th>날짜</th>
           </tr>
           <tr>
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