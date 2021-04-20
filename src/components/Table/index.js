import React from "react";
import "./style.css";
import TableRow from "../TableRow/index";
import API from "../../utils/API";



class Table extends React.Component {
  state = {
    employees: []
  };
  componentDidMount() {
    API.getRandomEmployee()
    .then(res => {
      console.log(res);
      this.setState({ employees: res.data.results });
      
    })
    .catch(err => console.log(err));
    
  }
  

  // const [employeeState, setEmployeeState] = useState([])
  //eventually turn set to reults array from the api



  // useEffect(() => {
  //   console.log("Hello");
  //   API.getRandomEmployee()
  //     .then(res => {
  //       const tempArray = [];
  //       for (var i = 0; i < 20; i++) {
  //         tempArray.push(res.data.results[i])
  //       }

  //       //I need to grab data from API
  //       console.log(tempArray);
  //       // console.log(res.data.results[0].picture.thumbnail);
  //       // setEmployeeState(tempArray);
  //     })
  //     .catch(err => console.log(err));

  // }, []);

  // employeeState.length > 0 && console.log(employeeState);

  render(){
    console.log(this.state.employees);
  return (
    <table className="table table-striped">
      <thead>
        <tr className= "headercol" >
          <th scope="col">Image</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody className="table table-striped">
        {this.state.employees.length > 0 && this.state.employees.map((person, index) => ( //{employeeState.map((person, index)
              
                <TableRow 
                
                
                  key={index}
                  image={person.picture.medium}
                  firstName={person.name.first}
                  lastName={person.name.last} //{person.name.first}
                  phone={person.phone}
                  email={person.email}
                  dob={person.dob.age}
              
              
                />
          






          
          // console.log(person)

        ))}
      </tbody>
  </table>
)}}


export default Table;
