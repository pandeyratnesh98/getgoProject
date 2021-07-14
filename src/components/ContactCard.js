import React from "react";

const ContactCard = (props) => {
  console.log(props.contactlist);
  const card = props.contactlist.map((contact) => {
    return (
      <tr>
        <td>{contact.FirstNameLastName}</td>
        <td>{contact.job}</td>
        <td>{contact.phonenumber}</td>
        <td>{contact.EmailAddress}</td>
      </tr>
    );
  });
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Full Name</th>
          <th scope="col">Job</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email Address</th>
        </tr>
      </thead>
      <tbody>{card}</tbody>
    </table>
  );
};

export default ContactCard;
