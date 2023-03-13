import React from "react";
import logo from "../../logo.svg";
import { connect } from "react-redux";
import Header from "../../components/header/Header";
import "./visitors.css";
import { getDog } from "../../redux/actions/dog";

const Visitors = (props) => {
  const { fetching, dog, onRequestDog, error } = props;
  return (
    <div className="container-fluid">
      <Header headerName="Visitors" />
      <p>Visitors content</p>
      <div>
        <div>
          <div className="mx-auto ">
            <img className="img-fluid img-style" src={dog || logo} />
          </div>
          <h1 className="">Welcome to Dog Saga</h1>
        </div>
        {dog ? (
          <p className="">Keep clicking for new dogs</p>
        ) : (
          <p className="">Replace the React icon with a dog!</p>
        )}
        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}
        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetching: state.dogReducer.fetching,
    dog: state.dogReducer.dog,
    error: state.dogReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestDog: () => dispatch(getDog()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Visitors);
// export default Visitors;
