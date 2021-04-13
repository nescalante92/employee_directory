import React from "react";
import "./style.css";

const TableRow = (props) => {
    return (
        <tr>
            <th scope="row">1</th>
            <td>{props.name}</td>
            <td>Otto</td>
            <td>@mdo</td>


        </tr>

    )

}


export default TableRow;