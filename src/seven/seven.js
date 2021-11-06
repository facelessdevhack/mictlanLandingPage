import React from 'react';
import './seven.css';
import bg from '../assets/seven.png';
import bgtwo from '../assets/bg-four-two.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Caro from './caro';
import ImgCaro from './imgCaro';

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
  const data = [
    {
      key: 'youtube-1',
      url: 'https://www.youtube.com/embed/QLGN__6RH7I',
    },
    {
      key: 'youtube-2',
      url: 'https://www.youtube.com/embed/QKvmGbI-bQk',
    },
    {
      key: 'youtube-3',
      url: 'https://www.youtube.com/embed/NYEf347d2FY',
    },
    {
      key: 'youtube-4',
      url: 'https://www.youtube.com/embed/9rFn8AEqwUI',
    },
  ];
  const data2 = [
    { key: 'youtube-2', url: 'https://www.youtube.com/embed/BOWGvD-X0ns' },
    { key: 'youtube-3', url: 'https://www.youtube.com/embed/giAGSEYC3Cc' },
    { key: 'youtube-1', url: 'https://www.youtube.com/embed/fptEbvoGqmE' },
    { key: 'youtube-4', url: 'https://www.youtube.com/embed/jXYwOfBNg9Q' },
    { key: 'youtube-5', url: 'https://www.youtube.com/embed/k_Kb89L-G5w' },
    { key: 'youtube-6', url: 'https://www.youtube.com/embed/Xw9z4WId4WM' },
    { key: 'youtube-7', url: 'https://www.youtube.com/embed/9rFn8AEqwUI' },
    { key: 'youtube-8', url: 'https://www.youtube.com/embed/8WLA8HX6kiA' },
    { key: 'youtube-9', url: 'https://www.youtube.com/embed/MH-NqOJcoPA' },
    { key: 'youtube-10', url: 'https://www.youtube.com/embed/S1xU43MyHlU' },
    { key: 'youtube-11', url: 'https://www.youtube.com/embed/QLGN__6RH7I' },
    { key: 'youtube-12', url: 'https://www.youtube.com/embed/QLGN__6RH7I' },
    { key: 'youtube-13', url: 'https://www.youtube.com/embed/QKvmGbI-bQk' },
    { key: 'youtube-14', url: 'https://www.youtube.com/embed/NYEf347d2FY' },
  ];
  const data3 = [
    { key: 'youtube-1', url: 'https://www.youtube.com/embed/iAg1Ff0VKkM' },
    { key: 'youtube-1', url: 'https://www.youtube.com/embed/RlYli1saZt0' },
    { key: 'youtube-1', url: 'https://www.youtube.com/embed/jXYwOfBNg9Q' },
    { key: 'youtube-1', url: 'https://www.youtube.com/embed/zZ3Fz_3-LUs' },
    { key: 'youtube-1', url: 'https://www.youtube.com/embed/8F7AyQUIveo' },
    { key: 'youtube-1', url: 'https://www.youtube.com/embed/pdYIVZpIVEI' },
    { key: 'youtube-1', url: 'https://www.youtube.com/embed/BuctSSdsB88' },
    { key: 'youtube-1', url: 'https://www.youtube.com/embed/WDzqKKuCUkw' },
  ];
  return (
    <div ref={ref}>
      {isDesktopOrLaptop && (
        <div class="gs-slides-in">
          <div class="home-7" style={{ backgroundImage: `url(${bgtwo})` }}>
            <div
              class="home-7-img"
              style={{
                backgroundImage: `url(${bg})`,
                position: 'absolute',
                top: '53%',
                zIndex: '0',
              }}
            />
            <div className="video-grid">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '4rem 4rem',
                  gap: '0.5% 20%',
                }}
              >
                <div
                  style={{
                    margin: '0px auto -80px auto',
                    width: '125%',
                    maxHeight: '100%',
                  }}
                >
                  <h1
                    style={{
                      fontFamily: 'Afolkalips',
                      fontSize: '0.6rem',
                    }}
                  >
                    GAMEPLAY
                  </h1>
                  <Caro data={data} mob={false} />
                </div>
                <div
                  style={{
                    margin: '0 auto',
                    width: '100%',
                    maxHeight: '100%',
                    zIndex: '1',
                  }}
                >
                  <h1 style={{ fontFamily: 'Afolkalips', fontSize: '0.6rem' }}>
                    CONCEPT
                  </h1>
                  <ImgCaro mob="false" />
                </div>
                <div
                  style={{
                    margin: '0 auto',
                    width: '125%',
                    maxHeight: '100%',
                  }}
                >
                  <h1 style={{ fontFamily: 'Afolkalips', fontSize: '0.6rem' }}>
                    CHARACTERS
                  </h1>
                  <Caro data={data2} mob="false" />
                </div>
                <div
                  style={{
                    margin: '0 auto',
                    width: '125%',
                    maxHeight: '100%',
                  }}
                >
                  <h1 style={{ fontFamily: 'Afolkalips', fontSize: '0.6rem' }}>
                    BEHIND THE SCENES
                  </h1>
                  <Caro data={data3} mob="false" />
                </div>
              </div>
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
                    <Caro data={data} mob={true} />
                  </div>
                  <div className="home-7-video-img">
                    <h1>CONCEPT</h1>
                    <ImgCaro mob={true} />
                  </div>
                  <div className="home-7-video">
                    <h1>Characters</h1>
                    <Caro data={data2} mob={true} />
                  </div>
                  <div className="home-7-video">
                    <h1>BEHIND THE SCENES</h1>
                    <Caro data={data3} mob={true} />
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
