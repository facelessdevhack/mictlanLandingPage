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
          <div class="gs-slides-in gs-slides-show">
            <div class="home-4" style={{ backgroundImage: `url(${bg})` }}>
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
                <div>
                  Battle in the mighty city of Tenochtitlan, climb the snowy
                  mountain of Popocatepetl, travel
                </div>
                <div>
                  {" "}
                  through cities and ancient temples, explore the deep jungle
                  flatlands of the Yucatan Peninsula,{" "}
                </div>
                <div>
                  {" "}
                  the mountains of Chiapas, the valleys of Central Mexico, and
                  much more.{" "}
                </div>
                <div>
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
        <div class="home-4" style={{ backgroundImage: `url(${mbBg})` }}>
          <div class="home-4-info home-text home-text-line-height slides-animation-long en">
            <div class="text-title-spacing">
              <div class="introduction-info-en-title"> The banner stands. </div>
              <div class="introduction-info-en-title">
                {" "}
                The soul of Yaoguai would be{" "}
              </div>
              <div class="text-red-title"> FREE! </div>
            </div>
            <div>Six years ago,</div>
            <div>on April Fool's Day by chance,</div>
            <div>we determined to develop a big-deal video game.</div>
            <div>Another six years before that,</div>
            <div class="">we fiercely argued about where Sun WuKong</div>
            <div>headed to after his Buddhahood.</div>
            <div> Twelve years in total, the commitment we made </div>
            <div class="text-leading"> became malarky in the end. </div>
            <div> On countless nights of working overtime, </div>
            <div class="">
              {" "}
              exhaustedly, we asked ourselves half-jokingly --{" "}
            </div>
            <div>
              {" "}
              how much did it matter whether{" "}
              <span class="text-red">Game Science </span>
            </div>
            <div> exist or not? </div>
            <div> Had any game we developed provided this world </div>
            <div class=""> with more fun? </div>
            <div> Had any story, character or gameplay we made </div>
            <div class=""> ever inspired you, players? I have to confess, </div>
            <div class="text-leading">
              {" "}
              we ourselves know the answer neither.{" "}
            </div>
            <div> However, </div>
            <div> we have faith in the new product, which arouses </div>
            <div> our own feeling firstly, could also touch people </div>
            <div> who share the same thoughts. </div>
            <div>
              <span class="text-exclusive">Black Myth: WuKong</span>,{" "}
            </div>
            <div>
              {" "}
              an <span class="text-red">action-adventure game </span>themed
              around{" "}
            </div>
            <div>
              {" "}
              legendary Chinese novel{" "}
              <span class="text-exclusive">Journey to the West</span>,{" "}
            </div>
            <div class="text-leading">
              {" "}
              is the newest answer given by Game Science.{" "}
            </div>
            <div class="introduction-info-en-end"> Hope you enjoy. </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fifth;
