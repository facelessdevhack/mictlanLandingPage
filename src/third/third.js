import React from 'react';
import './third.css';
import bg from '../assets/bg-three.png';
import bgtwo from '../assets/bgthreetwo.png';
import mbBg from '../assets/mbBg-three.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

function Third() {
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
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      // y: -100,
    },
  };
  return (
    <div ref={ref}>
      {isDesktopOrLaptop && (
        <div style={{ height: '100vh' }} class="gs-slides-in gs-slides-show">
          <motion.div
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            class="home-2"
            style={{ backgroundImage: `url(${bgtwo})` }}
          >
            <div className="overlay"></div>
            <motion.div
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              variants={{
                visible: { opacity: 1, y: '-48%' },
                hidden: {
                  opacity: 0,
                },
              }}
              class="home-2-img slides-animation-short"
              style={{ backgroundImage: `url(${bg})` }}
            ></motion.div>
            <motion.div
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                visible: { opacity: 1, y: '-50%', x: '0' },
                hidden: {
                  opacity: 0,
                  y: '-100%',
                },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              class="home-2-info home-text home-text-line-height slides-animation-long en"
            >
              <div class="introduction-info-en-title">
                {' '}
                Face the dangers between the heavens{' '}
              </div>
              <div class="text-title-spacing">
                <span className="introduction-info-en-title">and the </span>
                <span class="text-red-title">UNDERWORLD</span>.
              </div>
              <div>
                The collapse of the civilization will lead your soul to the
                three stages of the Mexica reality: the heavens,{' '}
              </div>
              <div>
                {' '}
                the earth, and the Mictlan, better known as the underworld,
                where you will battle evil spirits, demonic{' '}
              </div>
              <div>
                gods and wild mythological beast through the nine levels of
                vertical hells; and in order to free your soul,
              </div>
              <div>you will face the great Lord of Death: Mictlantecuhtli.</div>
            </motion.div>
          </motion.div>
        </div>
      )}
      {isTabletOrMobile && (
        <div class="gs-slides-in">
          <div class="home-2" style={{ backgroundImage: `url(${bgtwo})` }}>
            <div class="home-2-img slides-animation-short"></div>
            <motion.div
              style={{ marginTop: '25%' }}
              class="introduction-info slides-animation-long en"
            >
              <div class="introduction-info-en-title">
                {' '}
                Face the dangers between the heavens and the
              </div>
              <div class="text-title-spacing">
                <span class="text-red-title">UNDERWORLD</span>.
              </div>
              <div className="introduction-info-en-preface3">
                {' '}
                The collapse of the civilization will lead your soul to the
                three stages of the Mexica reality: the heavens, <br />
                <br /> the earth, and the Mictlan, better known as the
                underworld, where you will battle evil spirits, demonic <br />
                <br />
                gods and wild mythological beast through the nine levels of
                vertical hells; and in order to free your soul,
                <br />
                <br />
                you will face the great Lord of Death: Mictlantecuhtli.{' '}
              </div>
              {/* <div className="introduction-info-en-preface4">
                  {" "}
                  Brace yourself for excitement.{" "}
                </div> */}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Third;
