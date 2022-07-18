import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="bg">
        <div class="company"><p>We are</p></div>
        <div class="wrow">
        <div class="wcolumn">
        <div class='box'>
  <div class='wave -one'></div>
  <div class='wave -two'></div>
  <div class='wave -three'></div>
	<div class='wave -four'></div>

</div></div>
<div class="wcolumn">
        <div class='box'>
  <div class='wave -one'></div>
  <div class='wave -two'></div>
  <div class='wave -three'></div>
	<div class='wave -four'></div>

</div></div>
<div class="wcolumn">
        <div class='box'>
  <div class='wave -one'></div>
  <div class='wave -two'></div>
  <div class='wave -three'></div>
	<div class='wave -four'></div>

</div></div></div>


      <div style={{ height: "-5em" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align" style={{marginTop: "-15em"}}>
            
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable black"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }
}

export default Landing;
