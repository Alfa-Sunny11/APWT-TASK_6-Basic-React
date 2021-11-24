import React from 'react'

export default function Product(props) {
      return (
            <div className="container">
                  <div className="card">
                        <div className="card-body">
                              <h5 className="card-title">Product: <b>{props.name}</b></h5>
                              <h6 className="card-subtitle mb-2 text-muted">Price: <b>{props.price}</b></h6>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" className="card-link">Card link</a>
                              <a href="#" className="card-link">Another link</a>
                        </div>
                  </div>
                  
                  <p>Product: <b>{props.name}</b> Price: <b>{props.price}</b></p>
            </div>
      )
}
