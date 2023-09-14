import React from "react";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";

export default function About({ title }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section
        style={{ backgroundColor: "#1abc9c" }}
        className="vh-100 d-flex justify-content-center align-items-center"
      >
        <div className="container d-flex justify-content-center align-items-center flex-column text-center gap-3 text-white">
          <Header header="ABOUT COMPONENT" color="#fff" />
          <div className="row">
            <div className="col-md-6">
              <p className="text-start ">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-start ">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
