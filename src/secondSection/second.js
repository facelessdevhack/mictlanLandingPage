import React from 'react';
import './second.css';
import bgtwo from '../assets/bg-two.png';
import mbBg from '../assets/mbBg-two.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

function Second() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  console.log(entry);
  const variants = {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <div ref={ref}>
      {isDesktopOrLaptop && (
        <motion.div class="mc-slides" style={{ height: '100vh' }}>
          <div class="mc-slides-in mc-slides-hidden-up">
            <motion.div
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              class="home-introduction"
              style={{ backgroundImage: `url(${bgtwo})` }}
            >
              <div className="overlay"></div>
              <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                  visible: { opacity: 1, y: '-50%', x: '-15%' },
                  hidden: {
                    opacity: 0,
                    y: '-100%',
                  },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                class="introduction-info slides-animation-long en"
              >
                <div className="introduction-info-en-preface1">
                  {' '}
                  5000 YEAR OF LOST MYTHS{' '}
                </div>
                <div className="introduction-info-en-preface2">
                  {' '}
                  AWAKEN THEM WITHIN YOU{' '}
                </div>
                <div className="introduction-info-en-preface3">
                  {' '}
                  Their stories have been mute for centuries, their songs and
                  music have been nothing more than just empty echoes, crying
                  out to be heard once more... in Mictlan. <br /> <br /> In this
                  ancient adventure game, a red sky will rise above endless
                  mountains of deep jungle, where the remnants of a great and
                  lost civilization are hidden in its shadows. You will follow
                  the journey of brave characters in the mids of the chaos and
                  destruction of the last sighs of the Mexica civilization
                  during the conquest.{' '}
                </div>
                {/* <div className="introduction-info-en-preface4">
                  {" "}
                  Brace yourself for excitement.{" "}
                </div> */}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
      {isTabletOrMobile && (
        <div class="mc-slides">
          <div>
            <div
              class="home-introduction"
              style={{ backgroundImage: `url(${bgtwo})` }}
            >
              <div className="overlay"></div>
              <motion.div class="introduction-info slides-animation-long en">
                <div className="introduction-info-en-preface1">
                  {' '}
                  5000 YEAR OF LOST MYTHS{' '}
                </div>
                <div className="introduction-info-en-preface2">
                  {' '}
                  AWAKEN THEM WITHIN YOU{' '}
                </div>
                <div className="introduction-info-en-preface3">
                  {' '}
                  Their stories have been mute for centuries, their songs and
                  music have been nothing more than just empty echoes, crying
                  out to be heard once more... in Mictlan. <br /> <br /> In this
                  ancient adventure game, a red sky will rise above endless
                  mountains of deep jungle, where the remnants of a great and
                  lost civilization are hidden in its shadows. You will follow
                  the journey of brave characters in the mids of the chaos and
                  destruction of the last sighs of the Mexica civilization
                  during the conquest.{' '}
                </div>
                {/* <div className="introduction-info-en-preface4">
                  {" "}
                  Brace yourself for excitement.{" "}
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Second;
