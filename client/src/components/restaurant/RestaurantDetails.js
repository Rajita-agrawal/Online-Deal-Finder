import * as PropTypes from "prop-types";
import React from "react";

export function RestaurantDetails(props) {
  return (
    <>
      <div className="input-field col s12">
        <input
          onChange={props.onChange}
          value={props.name}
          id="name"
          type="text"
        />
        <label htmlFor="name">Service Provider Name</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={props.onChange}
          value={props.type}
          id="type"
          type="text"
        />
        <label htmlFor="type">Service Type</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={props.onChange}
          value={props.description}
          id="description"
          type="text"
        />
        <label htmlFor="description">Description</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={props.onChange}
          value={props.address}
          id="address"
          type="text"
        />
        <label htmlFor="address">Service Address</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={props.onChange}
          value={props.image}
          id="image"
          type="file"
        />
        <label htmlFor="image">Service Image</label>
      </div>

    </>
  );
}

RestaurantDetails.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.any,
  type: PropTypes.any,
  description: PropTypes.any,
  address: PropTypes.any,
  image: PropTypes.any
  
};
