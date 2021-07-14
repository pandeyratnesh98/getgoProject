import React, { useEffect } from "react";
import "./Services.css";
import { Aboutdata } from "../ContactModel";
import TitleDescription from "../TitleDescription";
import { connect } from "react-redux";
import { DataClear } from "../../action";

const Aboutus = ({ DataClear, wheatherData }) => {
  const response = wheatherData.response;
  useEffect(() => {
    if (response) {
      DataClear();
    }
  }, [response]);
  return (
    <div className="container">
      <div className="card">
        <h1 className="page-title">About Us</h1>
        <TitleDescription itemList={Aboutdata} />
      </div>
    </div>
  );
};

const mapStringToProps = (state) => {
  return { wheatherData: state.home };
};

export default connect(mapStringToProps, { DataClear })(Aboutus);
