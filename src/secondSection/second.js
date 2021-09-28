import React from "react";
import "./second.css";
import bgtwo from "../assets/bg-two.png";
import mbBg from "../assets/mbBg-two.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Second() {
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
    visible: { opacity: 1, y: 0, height: "50vh" },
    hidden: {
      opacity: 0,
      y: -100,
      height: "50vh",
    },
  };
  return (
    <div ref={ref}>
      {isDesktopOrLaptop && (
        <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          class="mc-slides"
          style={{ height: "100vh" }}
        >
          <div class="mc-slides-in mc-slides-hidden-up">
            <div
              class="home-introduction"
              style={{ backgroundImage: `url(${bgtwo})` }}
            >
              <motion.div
                animate={inView ? "visible" : "hidden"}
                variants={{
                  visible: { opacity: 1, y: "-50%" },
                  hidden: {
                    opacity: 0,
                    y: "-100%",
                  },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                class="introduction-info slides-animation-long en"
              >
                <div class="introduction-info-en-preface1">
                  {" "}
                  A whole new adventure{" "}
                </div>
                <div class="introduction-info-en-preface2"> awaits. </div>
                <div class="introduction-info-en-preface3"> LOCK N' LOAD. </div>
                <div class="introduction-info-en-preface4">
                  {" "}
                  Brace yourself for excitement.{" "}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
      {isTabletOrMobile && (
        <div class="mc-slides">
          <div>
            <div
              class="home-introduction"
              style={{ backgroundImage: `url(${mbBg})` }}
            >
              <div class="introduction-info slides-animation-long en">
                <div class="introduction-info-en-preface1">
                  {" "}
                  A whole new adventure{" "}
                </div>
                <div class="introduction-info-en-preface2"> awaits. </div>
                <div class="introduction-info-en-preface3"> LOCK N' LOAD. </div>
                <div class="introduction-info-en-preface4">
                  {" "}
                  Brace yourself for excitement.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Second;
