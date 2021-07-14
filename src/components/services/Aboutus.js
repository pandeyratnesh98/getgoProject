import React from "react";
import "./Services.css";
import { Aboutdata } from "../ContactModel";
import TitleDescription from "../TitleDescription";

const Aboutus = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="page-title">About Us</h1>
        <TitleDescription itemList={Aboutdata} />
      </div>
    </div>
  );
};

export default Aboutus;
