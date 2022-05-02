import React from "react";

const About = () => {
  return (
    <div className="p-2 w-full md:max-w-3xl md:mx-auto space-y-8 mt-20">
      <div className="mt-5">
        <h1 className="text-center text-xl text-bellefuOrange underline tracking-wider mb-5">
          About Us
        </h1>
        <p className=" text-base text-center">
          Bellefu.com is a dynamic online marketplace dedicated to agriculture
          related activities ensuring farmers, buyers and sellers of
          agricultural products have direct contact with other agro-allied
          providers and manufacturing industries around the world. Bellefu is
          designed to make searching for agro products available at your
          fingertips.
        </p>
        <p className="mt-5 text-base text-center">
          Simply register,upload your products and start interacting with our
          diverse subscribers.
        </p>
      </div>

      <div className="">
        <h1 className="text-center text-xl text-bellefuOrange underline tracking-wider mb-5">
          OUR MISSION
        </h1>
        <p className="text-center text-base">
          To create a borderless agricultural community across the globe.
        </p>
      </div>
      <div>
        <h1 className="text-center text-xl text-bellefuOrange underline tracking-wider mb-5">
          OUR VISION
        </h1>
        <p className="text-base text-center">
          To connect farmers and others in the value chain leading to
          sustainable healthy life style through food and allied product.
        </p>
      </div>
    </div>
  );
};

export default About;
