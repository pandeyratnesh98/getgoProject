import React, { useEffect } from "react";
import "./Services.css";
import { servicesList } from "../ContactModel";
import TitleDescription from "../TitleDescription";
import { DataClear } from "../../action";
import { connect } from "react-redux";

const Services = ({ DataClear, wheatherData }) => {
  const response = wheatherData.response;
  useEffect(() => {
    if (response) {
      DataClear();
    }
  }, [response]);
  return (
    <div className="container">
      <div className="card">
        <h1 className="page-title">Services</h1>
        <TitleDescription itemList={servicesList} />
      </div>
    </div>
  );
};

const mapStringToProps = (state) => {
  return { wheatherData: state.home };
};

export default connect(mapStringToProps, { DataClear })(Services);
