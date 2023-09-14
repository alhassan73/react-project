import React from "react";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";

export default function Contact({ title }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section className="min-vh-100 ">
        <div className="container-fluid d-flex justify-content-center align-items-center flex-column pt-5">
          <Header header="CONATCT SECTION" color="#2C3E50" />
          <div className="row justify-content-center align-items-center flex-column gap-3 w-100">
            <div className="col-md-6 input-container position-relative">
              <input
                type="text"
                className="w-100 p-4 d-block my-3"
                placeholder="input"
              />
              <label className="ms-2 z-0 position-absolute">Name</label>
            </div>
            <div className="col-md-6 input-container position-relative">
              <input
                type="number"
                className="w-100 p-4 d-block my-3"
                placeholder="input"
              />
              <label className="ms-2 z-0 position-absolute">Age</label>
            </div>
            <div className="col-md-6 input-container position-relative">
              <input
                type="email"
                className="w-100 p-4 d-block my-3"
                placeholder="input"
              />
              <label className="ms-2 z-0 position-absolute">Email</label>
            </div>
            <div className="col-md-6 input-container position-relative">
              <input
                type="password"
                className="w-100 p-4 d-block my-3"
                placeholder="input"
              />
              <label className="ms-2 z-0 position-absolute">Password</label>
            </div>
            <div className="col-md-6 input-container position-relative">
              <button className="btn btn-success me-auto w-auto">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
