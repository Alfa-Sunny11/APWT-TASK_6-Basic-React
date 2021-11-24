import React from 'react'
import { useState } from "react";

export default function Details(props) {
      
      const [std, setstate] = useState({
            name: 'Sunny',
            id: "19-40251-1",
            cgpa: "3.79",
            dept: "CSE",
      });
      return (
            <div className="container">
                  <h1>Name: {std.name}</h1>
                  <h1>ID: {std.id}</h1>
                  <h1>CGPA: {std.cgpa}</h1>
                  <h1>Department: {std.dept}</h1>
            </div>
      )
}
