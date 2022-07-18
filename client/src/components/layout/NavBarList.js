import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import React from "react";

export function NavBarList(props) {
  return (
    <>
      <li>
        <Link to="/restaurants/create">Create Shop</Link>
      </li>

      <li>
        <Link to="/restaurants">All Services</Link>
      </li>
      <li>
        <Link to="/orders">Your Orders</Link>
      </li>
      <li>
        <b>Hey</b> {(props.user.name || "").split(" ")[0]}
      </li>
      <li>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a onClick={props.onClick}>Logout</a>
      </li>
    </>
  );
}

NavBarList.propTypes = {
  user: PropTypes.any,
  onClick: PropTypes.func
};
