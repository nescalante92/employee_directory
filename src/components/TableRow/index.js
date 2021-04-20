import React from "react";
import "./style.css";

function TableRow(props) {
    return (
        <tr >
            {/* <th scope="row"></th> */}
            {/* <div>{props.image}</div> */}
            <img className="image"src={props.image}></img>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
)};


export default TableRow;