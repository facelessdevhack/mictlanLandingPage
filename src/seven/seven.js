import React from 'react';
import './seven.css';
import bg from '../assets/seven.png';
import bgtwo from '../assets/bg-four-two.png';
import mbBg from '../assets/mbBg-three.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import one from '../assets/bg.mp4';
import { Row, Col } from 'antd';

function Seven() {
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
        <div style={{ maxWidth: '100vw', marginLeft: '20%' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '5rem 5rem',
              gap: '5%',
            }}
          >
            <div
              style={{ margin: '0 auto', maxWidth: '100%', maxHeight: '100%' }}
            >
              <h1>GAMEPLAY</h1>
              <video
                src={one}
                loop
                controls
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
            <div
              style={{ margin: '0 auto', maxWidth: '100%', maxHeight: '100%' }}
            >
              <h1>GAMEPLAY</h1>
              <video
                src={one}
                loop
                controls
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
            <div
              style={{ margin: '0 auto', maxWidth: '100%', maxHeight: '100%' }}
            >
              <h1>GAMEPLAY</h1>
              <video
                src={one}
                loop
                controls
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
            <div
              style={{ margin: '0 auto', maxWidth: '100%', maxHeight: '100%' }}
            >
              <h1>GAMEPLAY</h1>
              <video
                src={one}
                loop
                controls
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div class="gs-slides-in">
          <div class="home-10" style={{ backgroundImage: `url(${bgtwo})` }}>
            <motion.div
              style={{ marginTop: '25%' }}
              class="introduction-info slides-animation-long en"
            >
              <div className="home-7-video-container">
                <div className="home-7-video-wrapper">
                  <div className="home-7-video">
                    <h1>GAMEPLAY</h1>
                    <video
                      className="home-7-video-inner"
                      src={one}
                      loop
                      controls
                      // style={{ width: "100%" }}
                    />
                  </div>
                  <div className="home-7-video">
                    <h1>CONCEPT</h1>
                    <video
                      className="home-7-video-inner"
                      src={one}
                      loop
                      controls
                      // style={{ width: "100%" }}
                    />
                  </div>
                  <div className="home-7-video">
                    <h1>characters</h1>
                    <video
                      className="home-7-video-inner"
                      src={one}
                      loop
                      controls
                      // style={{ width: "100%" }}
                    />
                  </div>
                  <div className="home-7-video">
                    <h1>VIDEOS</h1>
                    <video
                      className="home-7-video-inner"
                      src={one}
                      loop
                      controls
                      // style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Seven;
