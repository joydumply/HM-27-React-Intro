import React from "react";
import './App.css';
class Users extends React.Component{

  

  render(){

    const users = [
      {
        first_name: 'Nick',
        last_name: 'Fury',
        work_days: 28,
        sallary: 500
      },

      {
        first_name: 'Tony',
        last_name: 'Stark',
        work_days: 2,
        sallary: 5500
      },

      {
        first_name: 'Steve',
        last_name: 'Rogers',
        work_days: 55,
        sallary: 230
      },

    ]

    
    return(
      <>
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Work Days</th>
          <th>Sallary</th>
        </thead>
        <tbody>
        {
          users.map((user,index) => (
            <User key={index} user={user} />
          ))
        }
        </tbody>
      </table>
      
      </>
    )
  }
}

class User extends React.Component{
  constructor(props){
    super();
    this.props = props;
  }
  render(){
    return(
      <>
      <tr>
        <td>{this.props.user.first_name}</td>
        <td>{this.props.user.last_name}</td>
        <td>{this.props.user.work_days}</td>
        <td>{this.props.user.sallary}</td>
      </tr>
      </>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
