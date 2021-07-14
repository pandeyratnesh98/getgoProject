import React from "react";
import "./Services.css";
import { servicesList } from "../ContactModel";
import TitleDescription from "../TitleDescription";

const Services = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="page-title">Services</h1>
        <TitleDescription itemList={servicesList} />
      </div>
    </div>
  );
};

export default Services;
