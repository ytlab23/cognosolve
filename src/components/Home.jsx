import React from "react";
import { Carousel } from "flowbite-react";

import ban1 from "../assets/ban1.png";
import ban2 from "../assets/ban2.png";
import ban3 from "../assets/ban3.png";

const Home = () => {
  return (
    <div className=" bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={ban1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                AI Expertise at{" "}
                <span className="text-brandPrimary leading-snug">
                  Your Service
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Elevate Your Business with Data-Driven Strategies.
              </p>
              <a
                href="/"
                className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey inline-block"
              >
                Register
              </a>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={ban2} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Unlock The Power of{" "}
                <span className="text-brandPrimary leading-snug">AI</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Transforming Businesses with Intelligent Solutions.
              </p>
              <a
                href="/"
                className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey inline-block"
              >
                Register
              </a>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={ban3} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Leading AI{" "}
                <span className="text-brandPrimary leading-snug">
                  Consulting
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Pioneering Innovation for Tomorrow&apos;s Challenges.
              </p>

              <a
                href="/"
                className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey inline-block"
              >
                Register
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
