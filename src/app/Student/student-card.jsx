import React from 'react'

function Studentcard() {
  return (
    <div className="card my-2 mx-3">
      <div className="img-div">
        <img src="boy1.jpg" alt="images"/>
      </div>
      <h1>003</h1>
      <h2>ABUJAR</h2>
      <div className="card-container">
        <button className="circle1">
            <i className="fa fa-search icon"></i>
          
        </button>
        <button className="circle2">
            <i className="fa fa-pencil icon"></i>
        </button>
        <button className="circle3">
            <i className="fa fa-trash icon"></i>
        </button>
      </div>
    </div>
 
  )
}

export default Studentcard;
