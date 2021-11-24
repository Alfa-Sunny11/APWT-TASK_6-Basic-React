import React from 'react'
import Footer from './Footer'
import Student from './Student'
// import Product from './Product'

export default function Home() {
      return (
            <div>
                  <h1>This is a Home page</h1>
                  <Student name="Alfa" id="19-40251-1" cgpa="3.79"/>
                  <Student name="Sunny" id="19-40065-1" cgpa="3.86"/>
                  <Student name="Ahamed" id="19-42354-1" cgpa="3.67"/>  
                  <Student name="Mr X" id="19-42324-1" cgpa="3.83"/>  
                  <div className="container my-5">
                                       
                        <Footer/>
                  </div> 
                  
            </div>
      )
}
