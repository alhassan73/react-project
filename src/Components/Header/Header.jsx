import React from "react";

export default function Header({ header , color }) {

  return (
    <>
      <div className="mt-4 pb-3 header-container">
        <h1 className="fw-bold text-center">{header}</h1>
        <div className="d-flex  justify-content-center align-items-center my-2">
          <div
            className="left-line"
            style={{
              width: "100px",
              height: "4px",
              backgroundColor: color,
            }}
          ></div>
          <i className="fa-solid fa-star mx-3 fs-6"></i>
          <div
            className="right-line"
            style={{
              width: "100px",
              height: "4px",
              backgroundColor: color,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
