import React from "react";
import "./fourth.css";
import bg from "../assets/bg-four-two.png";
import bgtwo from "../assets/bg-four.png";
import mbBg from "../assets/mbBg-four.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Fourth() {
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
  return (
    <div ref={ref}>
      {isDesktopOrLaptop && (
        <motion.div
          style={{ height: "100vh" }}
          class="gs-slides-in gs-slides-show"
        >
          <div class="home-3" style={{ backgroundImage: `url(${bg})` }}>
            <div className="overlay"></div>
            <motion.div
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              variants={{
                visible: { opacity: 1, y: "-39.25%" },
                hidden: {
                  opacity: 0,
                  y: "-10%",
                },
              }}
              class="home-3-img slides-animation-short"
              style={{ backgroundImage: `url(${bgtwo})` }}
            ></motion.div>
            <motion.div
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, y: "-50%" },
                hidden: {
                  opacity: 0,
                  y: "-60%",
                },
              }}
              // transition={{ duration: 0.5, ease: "easeOut" }}
              class="home-3-info home-text home-text-line-height slides-animation-long en"
            >
              <div class="text-title-spacing">
                <div class="introduction-info-en-title"> The Clash of two </div>
                <div class="introduction-info-en-title">
                  {" "}
                  <span class="text-red-title">CIVILIZATIONS</span>.{" "}
                </div>
              </div>
              <div class="text-leading">
                {" "}
                Relive, through the characters, the clash of two civilizations,
                the confrontation of two empires
                <br /> and witness one of the most important events in the
                history of mankind.
                <br /> Play as a Mexica warrior or a soldier of the crown, and
                experience the moral conflicts of
                <br /> highly realistic characters who have a variety of complex
                motivations.{" "}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
      {isTabletOrMobile && (
        <div class="gs-slides-in">
          <div class="home-2" style={{ backgroundImage: `url(${bg})` }}>
            <div
              class="home-2-img slides-animation-short"
              //   style={{ backgroundImage: `url(${bgtwo})` }}
            ></div>
            <motion.div
              style={{ marginTop: "35%" }}
              class="introduction-info slides-animation-long en"
            >
              <div class="text-title-spacing">
                <div class="introduction-info-en-title">The Clash of two </div>
                <div class="introduction-info-en-title">
                  {" "}
                  <span class="text-red-title">CIVILIZATIONS</span>.{" "}
                </div>
              </div>
              <p className="introduction-info-en-preface3">
                {" "}
                Relive, through the characters, the clash of two civilizations,
                the confrontation of two empires and witness one of the most
                important events in the history of mankind. Play as a Mexica
                warrior or a soldier of the crown, and experience the moral
                conflicts of highly realistic characters who have a variety of
                complex motivations.{" "}
              </p>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fourth;
