import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
//import { useState } from "react";
import "./form.css";


class formPopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobile: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value
    });
  };
  lasthandler = (event) => {
    this.setState({
      lastName: event.target.value
    });
  };
  emailhandler = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  mobilehandler = (event) => {
    this.setState({
      mobile: event.target.value
    });
  };

  handleSubmit = (event) => {
    alert(
      `Thanks ${this.state.firstName} ${this.state.lastName}! We will reach out to you soon ,till then , happy petting!`
    );
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      mobile: ""
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
      <div className="form justify-content-center">
        <form onSubmit={this.handleSubmit}>
         
            
                <div className="input-group">
                  <span className="input-group-addon"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.firsthandler}
                  placeholder="First Name"
                  className="form-control"
                  required
                />
                </div>
              
                <div className="input-group">
                  <span className="input-group-addon "><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></span>
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.lasthandler}
                  placeholder="Last Name"
                  className="form-control"
                  required
                />
                </div>
              

              <div className="input-group">
                  <span className="input-group-addon"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.emailhandler}
                  placeholder="Email"
                  className="form-control"
                  required
                />
                </div>
              
           
              <div className="input-group">
                  <span className="input-group-addon"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span>
                <input
                  type="tel"
                  value={this.state.mobile}
                  onChange={this.mobilehandler}
                  placeholder="Mobile No"
                  className="form-control"
                />
                </div>
             <br></br>
              <center>
                <button
                  href="#btn"
                  className="btn btn-success justify-content-center"
                  onClick={this.handleSubmit}
                >
                  Adopt
                </button>
                </center>

         
        </form>
        </div>
        <center>
        <img alt="" src="https://image.flaticon.com/icons/png/512/1344/1344623.png" className="adopt"></img> </center>
      </div>
    );
  }
}

export default formPopUp;
