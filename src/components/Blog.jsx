import React from "react";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { blogs } from "../constants/index";

const Blog = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="blog">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
          Free Insights & Tools for AI-driven Innovation
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          Explore our hand-picked 100% list of the best and free AI websites,
          insights and trends. Leverage these solutions for free. Book a
          consultation with us for an extended 100% free list of great AI tools
        </p>
        <a
          href="mailto:contact@cognosolve.com"
          className="btn-primary py-2 px-4 bg-brandPrimary text-white rounded hover:bg-neutralDGrey"
        >
          Email Us
        </a>
      </motion.div>

      {/* all blogs */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="mt-16"
      >
        <div className="grid grid-cols-4 gap-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col relative mb-12 cursor-pointer bg-white shadow-lg rounded-md overflow-hidden"
            >
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center"
              >
                {/* Image container */}
                <div className="w-full aspect-w-1 aspect-h-1">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {/* Text content */}
                <div className="p-4 flex-grow">
                  <h3 className="text-neutralGrey font-semibold mb-1">
                    {blog.title}
                  </h3>
                  <p className="text-brandPrimary hover:text-neutralBlack">
                    Visit
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
