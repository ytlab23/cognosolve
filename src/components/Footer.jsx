import React from "react";
import { TextInput } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import logo1 from "../assets/logo1.png";

const MyFooter = () => {
  return (
    <footer className="bg-neutralBlack text-white">
      <div className="px-4 lg:px-14 max-w-screen-xl mx-auto py-6">
        <div className="flex flex-wrap justify-between items-start">
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 mb-2">
              <img src={logo1} alt="CognoSolve Logo" className="w-8 h-8" />
              <div>
                <a href="#" className="text-xl font-semibold">
                  COGNOSOLVE
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs">
                © 2024 CognoSolve Ltd. All rights reserved
              </p>
              <div className="flex space-x-2 mt-8">
                <a href="#" className="text-white">
                  <BsFacebook />
                </a>
                <a href="#" className="text-white">
                  <BsInstagram />
                </a>
                <a href="#" className="text-white">
                  <BsTwitter />
                </a>
                <a href="#" className="text-white">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <div>
            <TextInput
              id="email"
              placeholder="Enter your email"
              required
              rightIcon={SiMinutemailer}
              type="email"
              className="text-xs"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
