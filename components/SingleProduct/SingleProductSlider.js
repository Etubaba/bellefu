import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { images } from "../../productData";

const SingleProductSlider = () => {
  return (
    <div className="p-2 lg:p-5 bg-bellefuWhite rounded-t-md relative">
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
            className="rounded-md h-48 md:60 lg:h-80 w-full object-cover sm:object-fill "
          />
        ))}
      </Carousel>

      <p className="absolute top-2 lg:top-5 uppercase text-xs bg-bellefuGreen px-3 py-1 rounded-tl-md rounded-br-md text-bellefuWhite font-medium">
        promoted
      </p>
    </div>
  );
};

export default SingleProductSlider;
