import React, { useEffect } from "react";
import ContactCard from "../ContactCard";
import "./Services.css";
import { ContactInfo } from "../ContactModel";
import { DataClear } from "../../action";
import { connect } from "react-redux";

const Contact = ({ DataClear, wheatherData }) => {
  const response = wheatherData.response;
  useEffect(() => {
    if (response) {
      DataClear();
    }
  }, [response]);
  const ContactData = ContactInfo;
  return (
    <div className="container">
      <div className="card">
        <h1 className="page-title">Contact Us</h1>
        <ContactCard contactlist={ContactData} />
      </div>
    </div>
  );
};

const mapStringToProps = (state) => {
  return { wheatherData: state.home };
};

export default connect(mapStringToProps, { DataClear })(Contact);
