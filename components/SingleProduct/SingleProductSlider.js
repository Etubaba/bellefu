import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { images } from "../../productData";

const SingleProductSlider = () => {
  return (
    <div className="p-7 bg-bellefuWhite rounded-t-md relative">
      <Carousel
        showArrows={true}
        showThumbs={false}
        internal={4000}
        infiniteLoop
        autoplay
        showStatus={false}
      >
        {images.map((image) => (
          <img
            loading="lazy"
            src={image.img}
            key={image.id}
            className="rounded-md h-96 w-full object-fill"
          />
        ))}
      </Carousel>

      <p className="absolute top-7 uppercase text-xs bg-bellefuGreen px-3 py-1 rounded-tl-md rounded-br-md text-bellefuWhite font-medium">
        promoted
      </p>
    </div>
  );
};

export default SingleProductSlider;
