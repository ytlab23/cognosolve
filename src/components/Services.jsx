import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// icons
import company1 from "../assets/icons/company1.png";
import company2 from "../assets/icons/company2.png";
import company3 from "../assets/icons/company3.png";
import company4 from "../assets/icons/company4.png";
import company5 from "../assets/icons/company5.png";
import company6 from "../assets/icons/company6.png";
import company7 from "../assets/icons/company7.png";

import membership from "../assets/icons/membership.png";
import association from "../assets/icons/association.png";
import machine from "../assets/icons/machine.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "AI Strategy Development",
      decription:
        "We algorithmically analyze market trends, competition dynamics, and internal capabilities to prescribe optimal AI integration pathways, ensuring future-proof operations.",
      image: membership,
    },
    {
      id: 2,
      title: "Data Analytics & Insights",
      decription:
        "Our AI-driven analytics engines parse, correlate, and distill data troves, illuminating hidden patterns and trends for strategic foresight and operational excellence.",
      image: association,
    },
    {
      id: 3,
      title: "Machine Learning Solutions",
      decription:
        "From hyperparameter tuning to ensemble learning, our AI architects engineer scalable, adaptable models, catalyzing automated decision-making and innovation acceleration.",
      image: machine,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8 ">
          <img src={company1} alt="Company1" />
          <img src={company2} alt="Company2" />
          <img src={company3} alt="Company3" />
          <img src={company4} alt="Company4" />
          <img src={company5} alt="Company5" />
          <img src={company6} alt="Company6" />
          <img src={company7} alt="Company7" />
        </div>
      </motion.div>

      {/* service cards */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-20 text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Streamline Your Community Management with Advanced AI Solutions
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div className="">
              <div className="bg-[#E8F5E9] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.decription}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
