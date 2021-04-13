import React, { useEffect, useState } from "react";
import "./style.css";
import TableRow from "../TableRow/index";
import API from "../../utils/API";

const nameArray = [
  "Mark",
  "Nelson",
  "Susan",
]







function Table() {
  const [employeeState, setEmployeeState] = useState(nameArray)
  //eventually turn set to reults array from the api



  useEffect(() => {
    console.log("Hello");
    API.getRandomEmployee()
      .then(res => {
        console.log(res);
        setEmployeeState(res);
      })
      .catch(err => console.log(err));

  }, []);
  console.log(employeeState);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {employeeState.map((person, index) => (
          <TableRow
            name={person.name.first}
            key={index}





          />


        ))}
      </tbody>






    </table>



  )




}


export default Table;
