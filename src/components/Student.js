import React from 'react';
import { Link } from "react-router-dom";

export default function Student(props) {
      return (
            <div className="container">
                  
                  <div className="card my-3">
                        <div className="card-body ">
                              <h5 className="card-title">Name: <b>{props.name}</b></h5>
                              <h6 className="card-subtitle mb-2 text-muted">ID: <b>{props.id}</b></h6><h6 className="card-subtitle mb-2 text-muted">CGPA: <b>{props.cgpa}</b></h6>
                              
                              <Link to="/student" className="card-link">Details</Link>
                        </div>
                  </div>

                  
            </div>
      )
}
