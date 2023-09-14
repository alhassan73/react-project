import React from "react";
import Layer from "../Layer/Layer";

export default function GalleryEl({ image, showImage }) {
  return (
    <>
      <div className="col-xl-4 col-md-6">
        <div
          className="img-container position-relative rounded-3 overflow-hidden"
          onClick={() => showImage(image)}
        >
          <img src={image} alt="img" className="w-100"/>
          <Layer />
        </div>
      </div>
    </>
  );
}
