import React from "react";
import "./eight.css";
// import bg from "../assets/seven.png";
import bgtwo from "../assets/scene_7.png";
import mbBg from "../assets/mbBg-three.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import rect from "../assets/rect.png";
import ff from "../assets/ff.png";

function Eight() {
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
      {/* {isDesktopOrLaptop && ( */}
      <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ height: "100vh" }}
        class="gs-slides-in gs-slides-show"
      >
        <div class="home-8" style={{ backgroundImage: `url(${bgtwo})` }}>
          {/* <div className="overlay"></div> */}
          <div className="press-kit-page">
            <div className="press-left">
              <h1>PRESS - KIT</h1>
              <div className="press-h4">
                <img src={rect} alt="" />
                <h4>MICTLAN AN ANCIENT MYSTICAL TALE</h4>
              </div>
              <p className="press-kit-text">
                Mictlan is an action-adventure third-person game set in the 15th
                century
              </p>
              <p className="press-kit-text">
                during the Spanish conquest of Mexico. Learn how to use weapons,
              </p>
              <p className="press-kit-text">
                conjure magic, pray the ancient Aztec Gods in order to survive
                the
              </p>
              <p className="press-kit-text">
                journey across Mictlan, the Valley of the Death.
              </p>
              <button>Download Press Kit</button>
            </div>
            <div className="press-right">
              <div
                className="press-right-img"
                style={{ backgroundImage: `url(${ff})` }}
              ></div>
              <div className="press-right-h4">
                <h4>FACT SHEET</h4>
                <img src={rect} alt="" />
              </div>
              <p className="press-kit-text-right">
                Developer:
                <br />
                Meta Studios Creative Agency K.K 株式会社 Based in Tokyo, Japan{" "}
              </p>
              <p className="press-kit-text-right">
                Release:
                <br />• Winter, 2025
              </p>
              <p className="press-kit-text-right">
                Platforms:
                <br />• Playstation 5 | Xbox | Steam Deck | PC 
              </p>
              <p className="press-kit-text-right">
                Website:
                <br />
                mictlanthegame.com
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* )} */}
      {/* {isTabletOrMobile && (
        <div class="gs-slides-in">
          <div class="home-2" style={{ backgroundImage: `url(${mbBg})` }}>
            <div class="home-2-img slides-animation-short"></div>
            <div class="home-2-info home-text home-text-line-height slides-animation-long en">
              <div class="introduction-info-en-title">
                {" "}
                We depic the eastern hero imortal epic{" "}
              </div>
              <div class="text-title-spacing">
                with a <span class="text-red-title">DEBOTED HEART</span>.{" "}
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
      )} */}
    </div>
  );
}

export default Eight;
