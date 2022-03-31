import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import {useState} from "react";

export default function Slider({slider}) {


  const [newSlider]=slider;
  

  return (
    <div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {newSlider.value?.map((slideimage, index) => (
          <img
            className="h-52 md:h-64 lg:h-80 w-full rounded-xl  "
            key={index}
            src={`https://bellefu.inmotionhub.xyz/get/sliders/image/${slideimage}`}
            alt={slideimage}
          />
        ))}
      </Carousel>
    </div>
  );
}
