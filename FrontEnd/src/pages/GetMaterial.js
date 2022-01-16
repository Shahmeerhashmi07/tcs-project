import React, { useState, useEffect } from "react";
import axios from "axios";
import './AssignStudent.css';
function GetMaterial() {
    const [material,setMaterial] = useState([])
    
      useEffect(() => {
        axios.get("http://localhost:3000/materials").then((res) => {
          const material = res.data;
          setMaterial(material);
        });
      }, []);
        
          return (
            <div className="App">
              <h1>Head</h1>
        
              <table  >
                <tr>
                  <th>Book</th>
                  <th>Stationary</th>
                </tr>
                {material.map((i) => {
                  return (
                    <tr>
                      <td>{i.book}</td>
                      <td>{i.stationary}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
    )
}

export default GetMaterial