import React,{useEffect,useState} from "react";
import {fetchboard} from "../actions/ConvinenceAction";
import {useSelector,useDispatch} from "react-redux";

export default function Board(props){
    const [page,setPage] = useState(1);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchboard(page))
    },[])

    const board_data = useSelector(state => state.product.board)
    const html = board_data.map((m) =>
        <table className={"table"} style={{"background-color":"white"}}>
           <tbody>
           <tr className={"table-color"}>
               <th width={"10%"}>번호</th>
               <th colSpan={"4"} className={"text-center"}>제목</th>
               <th className={"text-center"} width={"20%"}>글쓴이</th>
               <th className={"text-center"} width={"30%"}>날짜</th>
           </tr>
           <tr className={"table-color text-center"}>
               <td>{m.no}</td>
               <td colSpan={"4"}>{m.title}</td>
               <td>{m.author}</td>
               <td>{m.regdate}</td>
           </tr>
           </tbody>
        </table>
    )
    return(
        <div className={"jumbotron-board"}>
            <h1 className={"text-center"} style={{"background-color":"gray"}}>게시판</h1>
            {html}
            <div className={"text-center"} style={{"color":"black","background-color":"white"}}>
                <button className={"primary-success"}>pre</button>
                 &nbsp;{page}  /  {board_data.length} &nbsp;
                <button>next</button>
            </div>
        </div>
    )
}