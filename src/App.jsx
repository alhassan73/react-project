import React from "react";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Notfound from "./Components/Notfound/Notfound";

let routers = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home title="Home" /> },
      { path: "about", element: <About title="About" /> },
      { path: "portfolio", element: <Portfolio title="Portfolio" /> },
      { path: "contact", element: <Contact title="Contact" /> },
      { path: "*", element: <Notfound title="Not Found" /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}
