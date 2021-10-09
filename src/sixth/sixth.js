import React from "react";
import "./sixth.css";
import bg from "../assets/sixthbg.png";
import bgtwo from "../assets/sixth.png";
import mbBg from "../assets/mbBg-four.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Sixth() {
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
          <div class="home-6" style={{ backgroundImage: `url(${bg})` }}>
            <div className="overlay"></div>
            <motion.div
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, y: "-50%" },
                hidden: {
                  opacity: 0.1,
                  y: "-45%",
                },
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              class="home-6-img slides-animation-short"
              style={{ backgroundImage: `url(${bgtwo})` }}
            ></motion.div>
            <motion.div
              animate={inView ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, y: "-50%" },
                hidden: {
                  opacity: 0,
                  y: "-40%",
                },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              class="home-6-info home-text home-text-line-height slides-animation-long en"
            >
              <div class="text-title-spacing">
                <div class="introduction-info-en-title">
                  A game where history and fantasy come
                </div>
                <div class="introduction-info-en-title">
                  <span class="text-red-title">TOGETHER.</span>{" "}
                </div>
              </div>
              <div className="text-avenir">
                {" "}
                For the creation of the entire universe of Mictlan, our art and
                concept team is advised by a group{" "}
              </div>
              <div className="text-avenir">
                {" "}
                of specialists in history, society, clothing and traditions, in
                order to faithfully represent the{" "}
              </div>
              <div className="text-avenir">
                {" "}
                pre-Hispanic Mexico; but, also, our game will rely on fantastic,
                mythological, and fictional{" "}
              </div>
              <div className="text-avenir">
                {" "}
                elements that will make Mictlan a unique game.{" "}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
      {isTabletOrMobile && (
        <div class="">
          <div class="home-6" style={{ backgroundImage: `url(${mbBg})` }}>
            <div
              class="home-6-img slides-animation-short"
              //   style={{ backgroundImage: `url(${bgtwo})` }}
            ></div>
            <div class="home-6-info home-text home-text-line-height slides-animation-long en">
              <div class="text-title-spacing">
                <div class="introduction-info-en-title"> We depict this </div>
                <div class="introduction-info-en-title">
                  {" "}
                  Eastern hero's immortal epic with a{" "}
                </div>
                <div class="text-red-title"> DEVOTED HEART. </div>
              </div>
              <div class="introduction-info">
                {" "}
                The story of <span class="text-exclusive">WuKong </span>tells
                more than WuKong himself.{" "}
              </div>
              <div class="text-leading">
                {" "}
                The monkey is the leading role for sure, but he still is a small
                part of the whole vivid world.{" "}
              </div>
              <div>
                {" "}
                There are plenty of intriguing characters and thought-provoking
                dialogues in{" "}
                <span class="text-exclusive">Journey to the West</span>, not to
                mention the darkness veiled.{" "}
              </div>
              <div>
                {" "}
                We applaud when WuKong defeats those so-called "villains", but
                who are they indeed? Why they go against our heroes? Cunning
                fairies, brutal monsters, amorous lords or coward gods...{" "}
              </div>
              <div> We are curious about their fear and love, </div>
              <div class="text-leading">
                {" "}
                goodwill and hatred, obssessiveness and daily life.{" "}
              </div>
              <div>
                {" "}
                In virtue of high quality graphics, sufficient details,
                immersive combats and great storyline, we are able to build that{" "}
                <span class="text-red">Eastern fantasy world </span>alive in our
                heart, instead of only picturing some major characters.{" "}
              </div>
              <div>
                {" "}
                This is a wide wild romantic world, suffused with fancy and
                mystery, yet still seems truly existing.{" "}
              </div>
              <div class="text-leading">
                <span class="text-red-exclusive">Black Myth: WuKong</span>, is
                our first attempt to create this ultimate fictional universe.{" "}
              </div>
              <div class="">
                {" "}
                The dark night has given us piercing eyes, we will use them to{" "}
                <span class="text-red">discover our destiny</span>.{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sixth;
