import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function Slider({slider}) {
 //console.log(slider);

  const [newSlider]=slider;
  

  return (
    <div className="relative">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {newSlider.value?.map((slideimage, index) => (
          <>
            <img
              className="h-52 md:h-64 lg:h-80 w-full rounded-xl  "
              key={index}
              src={`https://bellefu.inmotionhub.xyz/get/sliders/image/${slideimage}`}
              alt={slideimage}
            />
            <button className="absolute top-48 left-32 bg-bellefuOrange shadow-md hover:bg-orange-300 p-2 rounded-md text-white"><a href="http://localhost:3000" target="_blank">Learn More</a></button>
          </>
        ))}
      </Carousel>
    </div>
  );
}
