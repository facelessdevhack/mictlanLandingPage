import React from "react";
import "./faq.css";
import bgtwo from "../assets/bg-faq.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Faq() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  console.log(entry);
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      // y: -100,
    },
  };
  const accordionData = {
    title: "WHEN IS THE GAME RELEASE?",
    content: `2024-2025, but depends on how soon we manage to get a publisher and Kickstarter campaign funded`,
  };
  const { title, content } = accordionData;
  return (
    <div ref={ref}>
      {/* {isDesktopOrLaptop && ( */}
      <motion.div
        style={{ height: "100vh" }}
        class="gs-slides-in gs-slides-show"
      >
        <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          class="home-7"
          style={{ backgroundImage: `url(${bgtwo})` }}
        >
          <div className="faq-wrapper">
            <h6>FACT SHEET</h6>
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <div id="accordion">
              <div id="accordian-item" className="accordion-item">
                <div className="accordion-title" id="accordion-title">
                  <h3>{title}</h3>
                  <div>+</div>
                </div>
                <div className="accordion-content">{content}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Faq;
