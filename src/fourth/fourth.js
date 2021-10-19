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
              {/* <div>
                {" "}
                The story of <span class="text-exclusive">WuKong </span>tells
                more than WuKong himself.{" "}
              </div> */}
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
              {/* <div>
                {" "}
                There are plenty of intriguing characters and thought-provoking
                dialogues in{" "}
                <span class="text-exclusive">Journey to the West</span>, not to
                mention the darkness veiled.{" "}
              </div>
              <div>
                {" "}
                We applaud when WuKong defeats those so-called "villains", but
                who are they indeed? Why they go against our heroes?{" "}
              </div> */}
              {/* <div>
                {" "}
                Cunning fairies, brutal monsters, amorous lords or coward
                gods... We are curious about their fear and love, goodwill and{" "}
              </div>
              <div class="text-leading">
                {" "}
                hatred, obssessiveness and daily life.{" "}
              </div>
              <div>
                {" "}
                In virtue of high quality graphics, sufficient details,
                immersive combats and great storyline, we are able to build that{" "}
              </div>
              <div>
                <span class="text-red-exclusive">Eastern fantasy world </span>
                alive in our heart, instead of only picturing some major
                characters.{" "}
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
              <div>
                {" "}
                The dark night has given us piercing eyes, we will use them to{" "}
                <span class="text-red">discover our destiny</span>.{" "}
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      )}
      {isTabletOrMobile && (
        <div class="">
          <div class="home-3" style={{ backgroundImage: `url(${mbBg})` }}>
            <div
              class="home-3-img slides-animation-short"
              //   style={{ backgroundImage: `url(${bgtwo})` }}
            ></div>
            <div class="home-3-info home-text home-text-line-height slides-animation-long en">
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

export default Fourth;
