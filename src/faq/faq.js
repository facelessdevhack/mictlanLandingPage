import React from 'react';
import './faq.css';
import bgtwo from '../assets/bg-faq.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Accordian from './accordian';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Faq() {
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
  const accordionData = [
    {
      title: 'When will the game be released?',
      content: `We are estimating an approximate release around, 2025, but it all depends on how soon we launch our Kickstarter initial crowdfunding campaign and what type of agreement we reach with a publisher.`,
    },
    {
      title: 'How can I support the Kickstarter campaign?',
      content: `Very simple: All you have to do is, log in to Kickstarter, pre register and you will be notified, when our campaign is released. 
      Once our campaign is live, we count on your support to make this incredible game project a reality! `,
    },
    {
      title: 'On which platforms will the game be available?',
      content: `It will be available on PC through Steam, PlayStation 4 | 5 and Xbox Series.`,
    },
    {
      title: 'How many characters are in the game?',
      content: `More than 500 NPCs will inhabit the world of Mictlan, ranging from diverse cultures from Mesoamerica and parts of Guatemala and Central America. `,
    },
  ];
  const accordionData2 = [
    {
      title: 'Who will be the main character?',
      content: `Currently, we are laying the stage for 3 stories: 
      A) Mexica Warrior:  Played by Famous Mexican Actor Horacio Rojas 
      B) Spanish General: Played by an unreleased actor TBA
      c) Nagua Women: Played by Mexican Actress Ishbel Bautista`,
    },
    {
      title: 'Where is the studio based?',
      content: `Our independent studio is based in Tokyo, Mexico City and San Francisco with our staff mostly 80% Mexicans.`,
    },
    {
      title: 'How much will the game cost on Kickstarter?',
      content: `We are estimating to be between $50US for a physical copy, $35US for a digital Steam Key, $100US for collectors edition.`,
    },
    {
      title: 'Is there any Mictlan merch available?',
      content: `Yes we have tons in our online store 
      https://store.mictlanthegame.com/`,
    },
  ];
  const accordionData3 = [
    {
      title: 'Can I be an NPC?',
      content: `Yes. We are offering the one in a lifetime option to become part of our video game, if you have indigenous appearance become a native character, if you have lighter skin, become a Spanish character. 
      For more info:
      https://store.mictlanthegame.com/`,
    },
    {
      title: 'What Engine are you using?',
      content: `We are currently using Unreal Engine 5.`,
    },
    {
      title: 'Are you looking for investors?',
      content: `Yes we are, but our minimum investment is 
      US $100.000, contact us if you are interested 
      sales@mictlanthegame.com`,
    },
    {
      title: 'Are you hiring?',
      content: `Yes we are always looking for talent, specially in Mexico and Latin America, contact us to review your portfolio:

      Send your artstation to:
      jobs@mictlanthegame.com`,
    },
  ];
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 45px)',
    height: 10,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: '#fff',
    fontFamily: 'SF-Compact-Medium',
    border: 'none',
    fontSize: '0.8rem',
  };
  return (
    <div ref={ref}>
      <motion.div
        style={{ height: '100vh' }}
        class="gs-slides-in gs-slides-show"
      >
        <motion.div
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          class="home-7"
          style={{ backgroundImage: `url(${bgtwo})` }}
        >
          <div className="faq-wrapper">
            <h6>FACT SHEET</h6>
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <Carousel
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                      ...arrowStyles,
                      left: 150,
                    }}
                    className="btn-faq"
                  >
                    {'<'}
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 150 }}
                    className="btn-faq"
                  >
                    >
                  </button>
                )
              }
              showStatus={false}
              showIndicators={false}
            >
              <div>
                {accordionData.map((data, index) => (
                  <>
                    <Accordian content={data.content} title={data.title} />
                  </>
                ))}
              </div>
              <div>
                {accordionData2.map((data, index) => (
                  <>
                    <Accordian content={data.content} title={data.title} />
                  </>
                ))}
              </div>
              <div>
                {accordionData3.map((data, index) => (
                  <>
                    <Accordian content={data.content} title={data.title} />
                  </>
                ))}
              </div>
            </Carousel>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Faq;
