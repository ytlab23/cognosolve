import React from "react";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

import {
  product,
  brand,
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
} from "../constants/index";

const Product = () => {
  return (
    <div className="my-12" id="product">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={product} alt="" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5 mx-auto"
          >
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Transform Your Business with Cognosolve&apos;s Comprehensive
              Solution Suite
            </h2>

            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Dive into the world of advanced AI solutions with{" "}
              <strong>Cognosolve</strong>. Specializing in tailor-made
              innovations, we offer a suite of services ranging from AI Strategy
              Development, crafting strategies for growth and innovation, to
              Data Analytics & Insights, providing data-driven strategic
              decisions. Experience seamless automation with our cutting-edge
              Machine Learning Solutions. Step forward into the future of AI
              consultancy with Cognosolve.
            </p>
            <button className="btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      >
        <div className="flex flex-col md:flex-row justify-start items-center gap-8">
          <div className="md:w-1/3">
            <img src={brand} alt="" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
                Working with Cognosolve has been a game-changer for our
                business. Their AI solutions have not only streamlined our
                operations but have also provided valuable insights that have
                propelled our growth.The team&apos;s expertise and dedication
                have exceeded our expectations, and we look forward to
                continuing our partnership for years to come.
              </p>

              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                John Can
              </h5>
              <p className="text-base text-neutralGrey mb-8">
                CEO of TechVision Inc.
              </p>
              <div>
                <div className="flex gap-8 items-center flex-wrap">
                  <img src={company1} alt="" className="cursor-pointer" />
                  <img src={company2} alt="" className="cursor-pointer" />
                  <img src={company3} alt="" className="cursor-pointer" />
                  <img src={company4} alt="" className="cursor-pointer" />
                  <img src={company5} alt="" className="cursor-pointer" />
                  <img src={company6} alt="" className="cursor-pointer" />
                  <div className="flex gap-8 items-center">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutralBlack"
                    >
                      Meet all customers
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#4CAF4F"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
