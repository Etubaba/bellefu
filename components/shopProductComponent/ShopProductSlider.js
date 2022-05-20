import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ShopProductSlider = ({ sliderDetails }) => {
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

        {sliderDetails?.map((image, index) => (
          <img
            loading="lazy"
            src={`https://bellefu.inmotionhub.xyz/get/product/image/${image}`}
            key={index}
            className="rounded-md h-48 md:60 lg:h-80 w-full object-cover sm:object-fill "
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ShopProductSlider;
