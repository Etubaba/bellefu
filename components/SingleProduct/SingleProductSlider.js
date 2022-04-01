import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import { images } from "../../productData";

const SingleProductSlider = ({ sliderDetails }) => {
  // getting the plan status to display either promoted or not
  const plan = sliderDetails[0]?.planName;

  console.log("sliderDetails", sliderDetails);

  // getting the images to display in the carousel
  const images = sliderDetails[0]?.images;

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
        {images?.map((image, index) => (
          <img
            loading="lazy"
            src={`https://bellefu.inmotionhub.xyz/get/product/image/${image}`}
            key={index}
            className="rounded-md h-48 md:60 lg:h-80 w-full object-cover sm:object-fill "
          />
        ))}
      </Carousel>

      {plan === "free" ? (
        <p className="absolute top-2 lg:top-5 uppercase text-xs bg-bellefuGreen px-3 py-1 rounded-tl-md rounded-br-md text-bellefuWhite font-medium">
          promoted
        </p>
      ) : null}
    </div>
  );
};

export default SingleProductSlider;
