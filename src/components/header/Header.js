import React from "react";
import "./header_style.css";

const Header = (props) => {
  return (
    // <div className="container-fluid header-container">{props.headerName}</div>

    <div className="card text-center header-container shadow">
      <div className="card-body">{props.headerName}</div>
    </div>
  );
};

export default Header;
