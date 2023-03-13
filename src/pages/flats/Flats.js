import React from "react";
import Header from "../../components/header/Header";

const Flats = () => {
  return (
    <div className="container-fluid">
      {/* <Header headerName="Flats" /> */}
      <div className="card shadow">
        <div className="card-body d-flex justify-content-between">
          <h3>Flats</h3>
          <button type="button" className="btn btn-primary">
            {" "}
            Add New Flats
          </button>
        </div>
      </div>
      <div className="card shadow-sm mt-2">hello</div>
    </div>
  );
};

export default Flats;
