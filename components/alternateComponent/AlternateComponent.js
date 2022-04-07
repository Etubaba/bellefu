import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const AlternateComponent = () => {
  const router = useRouter();
  return (
    <div className="h-[70%] max-w-[95%] lg:max-w-[90%] mx-auto">
      <div className="flex items-center justify-evenly mt-5">
        <div>
          <Image
            src="/bellefu-image.jpg"
            width="250"
            height="250"
            alt=""
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <Image
            src="/bellefu-image2.jpg"
            width="250"
            height="250"
            alt=""
            className="object-cover rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center -mt-8">
        <p className="text-xl font-semibold text-bellefuGreen">
          You do not access to this page...
        </p>
        <p className="text-bellefuGreen text-xl font-semibold">
          <span
            onClick={() => router.push("/login")}
            className="text-bellefuOrange text-lg font-bold"
          >
            Login
          </span>{" "}
          or{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-bellefuOrange text-lg font-bold"
          >
            Register
          </span>{" "}
          to have access..
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-14">
        <img
          src="/bellefulogo-fav.png"
          alt=""
          className="object-fill w-[60%] h-32"
        />
      </div>
    </div>
  );
};

export default AlternateComponent;
