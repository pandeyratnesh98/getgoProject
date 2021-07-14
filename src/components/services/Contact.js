import React from "react";
import ContactCard from "../ContactCard";
import "./Services.css";
import { ContactInfo } from "../ContactModel";

const Contact = () => {
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

export default Contact;
