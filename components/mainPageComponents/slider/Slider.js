import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function Slider() {
  const slides = [
    {
      image:
        "https://img.freepik.com/free-photo/organic-food-farm_342744-1362.jpg",
      alternate: "belleful",
    },
    {
      image:
        "https://img.freepik.com/free-photo/close-up-box-with-ripe-vegetables_329181-4612.jpg",
      alternate: "belleful",
    },
    {
      image:
        "https://img.freepik.com/free-photo/vegetables-basket-sunlight_268835-1168.jpg",
      alternate: "belleful",
    },
    {
      image:
        "https://img.freepik.com/free-photo/corn-fields-agriculture-photo-theme-small-corn-plants_2379-276.jpg",
      alternate: "belleful",
    },
  ];

  return (
    <div className="rounded-xl">
      <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} >
            {slides?.map((slideimage,index)=>(
                <img
                    className="h-80 rounded-xl  object-cover"
                    key={index}
                    src={slideimage.image}
                    alt={slideimage.alternate}
                />
            ))}
      </Carousel>
    </div>
  );
}
