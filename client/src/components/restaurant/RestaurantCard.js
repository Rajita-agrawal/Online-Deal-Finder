import * as PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export function RestaurantCard(props) {
  const { description, name, image,  _id } = props.rest;
  return (
    <div className="col s4 m4">
      <div className="card" style={{backgroundColor:"#ECAFAF"}}>
        <div className="card-content black-text">
          <span className="card-title">{name}</span>
          <p>{description}</p>
          <img src={image}></img>
          
        </div>
        <div className="card-action" >
          <Link to={`/restaurants/${_id}`} style={{color:"black"}}>Book Now</Link>
        </div>
      </div>
    </div>
  );
}

RestaurantCard.propTypes = { rest: PropTypes.any };
