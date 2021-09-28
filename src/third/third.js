import React from "react";
import "./third.css";
import bg from "../assets/bg-three.png";
import bgtwo from "../assets/bgthreetwo.png";
import mbBg from "../assets/mbBg-three.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
function Third() {
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
      y: -100,
    },
  };
  return (
    <div ref={ref}>
      {isDesktopOrLaptop && (
        <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ height: "100vh" }}
          class="gs-slides-in gs-slides-show"
        >
          <div class="home-2" style={{ backgroundImage: `url(${bgtwo})` }}>
            <div
              class="home-2-img slides-animation-short"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
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
              class="home-2-info home-text home-text-line-height slides-animation-long en"
            >
              <div class="introduction-info-en-title">
                {" "}
                What matters most is to embark on a{" "}
              </div>
              <div class="text-title-spacing">
                <span class="text-red-title">NEW JOURNEY</span>.{" "}
              </div>
              <div>
                {" "}
                As content creators, we've been struggling in this industry,{" "}
              </div>
              <div class="text-leading">
                {" "}
                since it is hard to hold back from expressing our true self.{" "}
              </div>
              <div> Why so many player characters in </div>
              <div>
                <span class="text-red-exclusive">Legends of 100 Heroes</span>{" "}
                look like Yaoguai instead?{" "}
              </div>
              <div> Why the most valuable resource in </div>
              <div>
                <span class="text-red-exclusive">Art of War: Red Tides </span>is
                named as "Soul Essence"?{" "}
              </div>
              <div> Most players might have no idea what hides from them. </div>
              <div class="text-leading"> But we always remember. </div>
              <div>
                {" "}
                So how could we forget{" "}
                <span class="text-exclusive">Journey to the West</span>?{" "}
              </div>
              <div class="text-leading">
                {" "}
                How could we forget all the regrets remained from 500 years ago?{" "}
              </div>
              <div>
                {" "}
                May you retain an innocent heart like{" "}
                <span class="text-red">WuKong</span>,{" "}
              </div>
              <div> after overcoming all these eighty one challenges. </div>
            </motion.div>
          </div>
        </motion.div>
      )}
      {isTabletOrMobile && (
        <div class="gs-slides-in">
          <div class="home-2" style={{ backgroundImage: `url(${mbBg})` }}>
            <div class="home-2-img slides-animation-short"></div>
            <div class="home-2-info home-text home-text-line-height slides-animation-long en">
              <div class="introduction-info-en-title">
                {" "}
                What matters most is to embark on a{" "}
              </div>
              <div class="text-title-spacing">
                <span class="text-red-title">NEW JOURNEY</span>.{" "}
              </div>
              <div>
                {" "}
                As content creators, we've been struggling in this industry,{" "}
              </div>
              <div class="text-leading">
                {" "}
                since it is hard to hold back from expressing our true self.{" "}
              </div>
              <div> Why so many player characters in </div>
              <div>
                <span class="text-red-exclusive">Legends of 100 Heroes</span>{" "}
                look like Yaoguai instead?{" "}
              </div>
              <div> Why the most valuable resource in </div>
              <div>
                <span class="text-red-exclusive">Art of War: Red Tides </span>is
                named as "Soul Essence"?{" "}
              </div>
              <div> Most players might have no idea what hides from them. </div>
              <div class="text-leading"> But we always remember. </div>
              <div>
                {" "}
                So how could we forget{" "}
                <span class="text-exclusive">Journey to the West</span>?{" "}
              </div>
              <div class="text-leading">
                {" "}
                How could we forget all the regrets remained from 500 years ago?{" "}
              </div>
              <div>
                {" "}
                May you retain an innocent heart like{" "}
                <span class="text-red">WuKong</span>,{" "}
              </div>
              <div> after overcoming all these eighty one challenges. </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Third;
