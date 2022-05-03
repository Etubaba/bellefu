import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function Slider({slider}) {

  const [newSlider]=slider;
  

  return (
    <div className="">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {newSlider.value?.map((slideimage, index) => (
          <div className="relative" key={index}>
            <img
              className="h-52 md:h-64 lg:h-80 w-full rounded-xl  "
              key={index}
              src={`https://bellefu.inmotionhub.xyz/get/sliders/image/${slideimage}`}
              alt={slideimage}
            />
            <button className="absolute top-28 left-10 md:top-52 md:left-16 bg-bellefuOrange shadow-md hover:bg-orange-300 p-2 rounded-md text-white" key={index}><a href={ process.env.NODE_ENV === "development"?"http://localhost:3000":"https://bellefu30web.vercel.app/"} target="_blank" key={index}>Learn More</a></button>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
