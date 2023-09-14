import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  let [activelink, setactiveLink] = useState("");
  let [padding, setPadding] = useState("25px");
  const handleScroll = () => {
    let newPadding = window.scrollY > 100 ? "10px" : "25px";
    setPadding(newPadding);
  };
  // for detecting sroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top z-2"
        style={{
          backgroundColor: "#2C3E50",
          paddingBlock: padding,
          transition: "0.5s",
        }}
      >
        <div className="container">
          <Link
            className={`navbar-brand text-white fs-2 fw-bold  ${
              activelink === "home" ? "active" : ""
            }`}
            to=""
            onClick={() => {
              setactiveLink("home");
            }}
          >
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item  m-2">
                <Link
                  className={`nav-link  text-white fs-6 fw-bold  ${
                    activelink === "about" ? "active" : ""
                  } `}
                  aria-current="page"
                  to="about"
                  onClick={() => {
                    setactiveLink("about");
                  }}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link
                  className={`nav-link  text-white fs-6 fw-bold  ${
                    activelink === "portfolio" ? "active" : ""
                  } `}
                  to="portfolio"
                  onClick={() => {
                    setactiveLink("portfolio");
                  }}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link
                  className={`nav-link  text-white fs-6 fw-bold  ${
                    activelink === "contact" ? "active" : ""
                  } `}
                  to="contact"
                  onClick={() => {
                    setactiveLink("contact");
                  }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
