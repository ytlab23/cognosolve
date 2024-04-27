import React from "react";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Newsletter = () => {
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 mb-12" // Added mb-12 for bottom margin
      id="testimonial"
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="flex items-center justify-center lg:w-2/5 mx-auto"
      >
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutralBlack font-semibold mb-6 lg:leading-snug">
            Explore AI Insights
          </h2>
          <p className="text-neutralGrey mb-6">
            Stay up-to-date with the latest insights, trends, and innovations in
            the field of AI consultancy.
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://ai-directory.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "8px" }}
              >
                AI Directory
              </a>
              <a
                href="https://chatgpt.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "8px" }}
              >
                ChatGPT
              </a>
              <a
                href="https://elevenlabs.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "8px" }}
              >
                Eleven Labs
              </a>
              <a
                href="https://grum.co"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "8px" }}
              >
                Grum.co
              </a>
            </div>
            <a
              href="/"
              className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey inline-block"
            >
              Get a Demo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
