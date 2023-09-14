import React from "react";
import { Helmet } from "react-helmet";
export default function Notfound({ title }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <div className="notFound-container vh-100 ">
        <div className="container d-flex justify-content-center align-items-center flex-column text-center h-100 ">
          <h1>Page Not Found </h1>
          <h2>404</h2>
        </div>
      </div>
    </>
  );
}
