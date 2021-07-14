import React from "react";

const TitleDescription = ({ itemList }) => {
  const content = itemList.map((item) => {
    return (
      <div className="card extra-margin">
        <h3 className="card-header">{item.title}</h3>
        <p className="extra-margin" style={{ marginTop: "15px" }}>
          {item.des}
        </p>
      </div>
    );
  });
  return <div>{content}</div>;
};

export default TitleDescription;
