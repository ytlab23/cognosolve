import React from "react";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

import { product, brand } from "../constants/index";

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

            <p className="md:w-3/4 text-md text-neutralGrey mb-8">
              Dive into the world of advanced AI solutions with{" "}
              <strong>Cognosolve</strong>. Specializing in tailor-made
              innovations, we offer a suite of services ranging from AI Strategy
              Development, crafting strategies for growth and innovation, to
              Data Analytics & Insights, providing data-driven strategic
              decisions. Experience seamless automation with our cutting-edge
              Machine Learning Solutions. Step forward into the future of AI
              consultancy with Cognosolve.
            </p>
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
            <img src={brand} alt="" className="rounded-md" />
          </div>

          <div className="md:w-2/3">
            <div>
              <p className="text-sm md:text-base text-neutralGrey mb-10 leading-6">
                Partnering with our company has been transformative for
                businesses seeking to integrate AI seamlessly into their
                operations. Our advanced solutions in AI strategy development
                not only streamline processes but also deliver deep analytical
                insights crucial for strategic decision-making. We specialize in
                algorithmically analyzing market trends and internal
                capabilities to develop tailored AI pathways that ensure
                future-proof operations. Our data analytics and insights
                services leverage AI-driven engines to parse and correlate vast
                data sets, revealing hidden patterns and trends that empower
                businesses with strategic foresight and operational excellence.
                Furthermore, our machine learning solutions are crafted to
                enhance market responsiveness and dynamic adaptation, setting
                new industry standards.
              </p>

              <div className="flex gap-8 items-center flex-wrap">
                <a
                  href="/"
                  className="font-bold text-xl text-brandPrimary hover:text-neutralBlack" // Increased font size
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" // Increased size
                    height="14" // Increased size
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
      </motion.div>
    </div>
  );
};

export default Product;
