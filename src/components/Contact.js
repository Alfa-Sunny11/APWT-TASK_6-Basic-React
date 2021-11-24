import React from 'react'

export default function Contact() {
      return (
            <div className="container">
                  <h1>Contact Form</h1>
                 <form>
                        <div className="mb-3">
                              <label className="form-label">Name</label>
                              <input type="text" className="form-control" id="name"/>
                              
                        </div>
                        <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                              <label className="form-label">Contact No</label>
                              <input type="number" className="form-control" id="conatct"/>
                              
                        </div>
                        <div className="mb-3">
                              <label className="form-label">Address</label>
                              <input type="text" className="form-control" id="address"/>
                              
                        </div>
                        <div className="mb-3 form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                              <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>


                        <button type="submit" className="btn btn-primary">Submit</button>
                  </form> 
            </div>
      )
}
