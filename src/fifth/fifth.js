import React from "react";
import "./fifth.css";
import bg from "../assets/bgmerge.png";
// import grad from "../assets/grad.png";
import mbBg from "../assets/mbBg-five.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
// import moon from "../assets/moon.png";
// import left from "../assets/moon-left.png";
// import center from "../assets/stars.png";
function Fifth() {
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
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ height: "100vh" }}
          class="gs-slides-in gs-slides-show"
        >
          <div class="gs-slides-in gs-slides-show">
            <div class="home-4" style={{ backgroundImage: `url(${bg})` }}>
              <div className="overlay"></div>
              {/* <div
                class="home-3-img slides-animation-short"
                style={{ backgroundImage: `url(${moon})` }}
              ></div>
              <div
                class="home-3-img slides-animation-short"
                style={{ backgroundImage: `url(${left})` }}
              ></div>
              <div
                class="home-3-img slides-animation-short"
                style={{ backgroundImage: `url(${center})` }}
              ></div>
              <div
                class="home-3-img-2 slides-animation-short"
                style={{ backgroundImage: `url(${grad})` }}
              ></div> */}
              <motion.div
                animate={inView ? "visible" : "hidden"}
                variants={{
                  visible: { opacity: 1, y: "-50%", x: "-8%" },
                  hidden: {
                    opacity: 0,
                    y: "-100%",
                  },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                class="home-4-info home-text home-text-line-height slides-animation-long en"
              >
                <div class="text-title-spacing">
                  <div class="introduction-info-en-title">
                    {" "}
                    The Ancient & Mythical{" "}
                  </div>
                  <div class="introduction-info-en-title">
                    {" "}
                    prehispcanic <span class="text-red-title">World</span>{" "}
                  </div>
                </div>
                <div className="text-avenir">
                  Battle in the mighty city of Tenochtitlan, climb the snowy
                  mountain of Popocatepetl, travel
                </div>
                <div className="text-avenir">
                  {" "}
                  through cities and ancient temples, explore the deep jungle
                  flatlands of the Yucatan Peninsula,{" "}
                </div>
                <div className="text-avenir">
                  {" "}
                  the mountains of Chiapas, the valleys of Central Mexico, and
                  much more.{" "}
                </div>
                <div className="text-avenir">
                  {" "}
                  On each adventure through Mictlan, you will see amazing
                  places.{" "}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
      {isTabletOrMobile && (
        <div class="home-2" style={{ backgroundImage: `url(${bg})` }}>
          <motion.div
            style={{ marginTop: "35%" }}
            class="introduction-info slides-animation-long en"
          >
            <div class="text-title-spacing">
              <div class="introduction-info-en-title">
                {" "}
                The Ancient & Mythical{" "}
              </div>
              <div class="introduction-info-en-title">
                {" "}
                prehispcanic <span class="text-red-title">World</span>{" "}
              </div>
            </div>
            <p className="introduction-info-en-preface3">
              {" "}
              Battle in the mighty city of Tenochtitlan, climb the snowy
              mountain of Popocatepetl, travel through cities and ancient
              temples, explore the deep jungle flatlands of the Yucatan
              Peninsula, the mountains of Chiapas, the valleys of Central
              Mexico, and much more. On each adventure through Mictlan, you will
              see amazing places.{" "}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Fifth;
