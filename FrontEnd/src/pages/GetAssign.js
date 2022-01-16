import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './GetMaterial';
import {DropdownButton,Dropdown, Button} from 'react-bootstrap';
import axios from 'axios'
import { response } from "express";

function GetAssign() {
  const getAssign = (id) => {
    try {
      axios.get(`http://localhost:3000/teacher/assignment/${id}`)
      .then((res) => setData(res))
    } catch (error) {
      console.log(error)
    }
  }
  const [id, setID] = React.useState()
  const [data, setData] = React.useState()
  return (
    <div className="App">
      Select Assignment By ID
        
        <div  className='menu'>
        <DropdownButton id="dropdown-basic-button" title="ID" onChange={(e) => setID(e)}>
        <Dropdown.Item href="#/action-1">020</Dropdown.Item>
        <Dropdown.Item href="#/action-2">043 </Dropdown.Item>
        <Dropdown.Item href="#/action-3">119</Dropdown.Item>
        </DropdownButton>
        </div>
        <div>
          <p>{DataTransfer}</p>
        </div>
        <div className="menu">
        <Button onClick={getAssign(id)} variant="primary">Get Assignment</Button>
        </div>
    </div>
  );
}

export default GetAssign;

