import React from "react";
import homeImg from "../Home/Assets/avataaars.svg";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";

export default function Home({title}) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section
        style={{ backgroundColor: "#1abc9c" }}
        className="vh-100  d-flex justify-content-center align-items-center"
      >
        <div className="container d-flex justify-content-center align-items-center flex-column text-center gap-3 text-white">
          <div className="photo-container">
            <img src={homeImg} alt="Home" className="w-75" />
          </div>

          <Header header="START FRAMEWORK" color="#fff" />
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </>
  );
}
