import React from "react";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
export default function Footer() {
  return (
    <>
      <footer
        className="text-center pt-3"
        style={{ backgroundColor: "#2C3E50" }}
      >
        <div className="container-fluid">
          <div className="row py-5 text-white">
            <div className="col-md-4">
              <div className="child1 py-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="child2  py-4">
                <h3>AROUND THE WEB</h3>
                <ul className="d-flex list-unstyled justify-content-center align-items-center gap-4">
                  <li>
                    <i className="fa-brands fa-facebook border border-2 p-2 rounded-circle fs-5"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter border border-2 p-2 rounded-circle fs-5"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin-in border border-2 p-2 rounded-circle fs-5"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-globe border border-2 p-2 rounded-circle fs-5"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="child3 py-4 ">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="copyright py-3 text-white text-center"
        style={{ backgroundColor: "#1A252F" }}
      >
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
