import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import iconimg from "./images/treaty.PNG"
import "./index.css";
import { NavBarList } from "./NavBarList";

class NavBar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <React.Fragment>
        <div className="navbar-fixed" >
          <nav className="z-depth-0">
            <div className="nav-wrapper" style={{backgroundColor:"#e48c8c"}}>
              <Link to="/" className="brand-logo">
              <img alt="LOGO" src={iconimg} style={{width: 64, height:64}}></img> 
              
              
              </Link>
              <div
                data-target="mobile-demo"
                className="sidenav-trigger show-on-med-and-down"
              >
                <i className="material-icons">menu</i>
              </div>
              {Object.keys(user || {}).length !== 0 ? (
                <ul
                  id="nav-mobile"
                  className="right hide-on-med-and-down list-margin"
                >
                  <NavBarList user={user} onClick={this.onLogoutClick} />
                </ul>
              ) : null}
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <NavBarList user={user} onClick={this.onLogoutClick} />
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(NavBar);
