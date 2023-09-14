import React, { useState } from "react";
import img1 from "./Assets/poert1.png";
import img2 from "./Assets/port2.png";
import img3 from "./Assets/port3.png";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import GalleryEl from "../GalleryEl/GalleryEl";
export default function Portfolio({ title }) {
  const [imageClicked, setImageClicked] = useState(false);
  const [image, setImage] = useState("");

  function showImage(image) {
    setImage(image);
    setImageClicked((clicked) => !clicked);
  }

  function hideImage(e) {
    if (!e.src) {
      setImageClicked((clicked) => !clicked);
      setImage("");
    }
  }
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section className="portfolio min-vh-100">
        {imageClicked ? (
          <div
            className="position-fixed d-flex justify-content-center align-items-center top-0 start-0 h-100 w-100 z-3 bg-primary bg-opacity-25"
            onClick={(e) => hideImage(e.target)}
          >
            <div className="overflow-hidden" style={{ width: "700px" }}>
              <img src={image} alt="portfolio" className="w-100" />
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          className="container pt-5 text-center"
          style={{ color: "#2C3E50" }}
        >
          <Header header="PORTFOLIO COMPONENT" color="#2C3E50" />
          <div className="row g-4 mb-5">
            {[img1, img2, img3, img1, img2, img3].map((elImg, i) => {
              return <GalleryEl image={elImg} showImage={showImage} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
