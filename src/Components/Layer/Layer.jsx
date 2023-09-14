import React from "react";

export default function Layer() {
  return (
    <>
      <div
        className="layer position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#1abc9cde" }}
      >
        <i className="fa-solid fa-plus fa-6x text-white"></i>
      </div>
    </>
  );
}
