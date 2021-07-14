import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./wheather.png";

const Navbar = () => {
  const ref = useRef();
  const [classElement, setClassname] = useState("active");

  useEffect(() => {
    const checkingLink = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.srcElement.children.length === 0 &&
        classElement === "active"
      ) {
        setClassname("");
      }
    };

    document.addEventListener("click", checkingLink);
  }, [ref, classElement]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          width="30"
          height="30"
          style={{ marginRight: "15px" }}
          alt=""></img>
        WheatherNow
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item ${classElement}`}>
            <Link className="nav-link" to="/" ref={ref}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Aboutus">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
