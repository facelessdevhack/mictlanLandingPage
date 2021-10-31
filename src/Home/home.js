/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Bg from '../assets/bg.mp4';
import './home.css';
import { useMediaQuery } from 'react-responsive';
import mbbg from '../assets/mbbg.png';
import logo from '../assets/Logo.png';
import ps from '../assets/ps.png';
import xbox from '../assets/xbox.png';
import unreal from '../assets/unreal.png';
import coming from '../assets/COMING.png';
import kickstarter from '../assets/kickstarter.png';
import steam from '../assets/steam.png';
import { ArrowRightAlt } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import d from '../assets/icons/d.png';
import i from '../assets/icons/i.png';
import f from '../assets/icons/f.png';
import p from '../assets/icons/p.png';
import t from '../assets/icons/t.png';
import y from '../assets/icons/y.png';
import { Row, Col } from 'antd';

function Home() {
  const [showSign, setSign] = useState(true);
  const [formTransform, setTransform] = useState('0px');
  const [btnTransform, setBtn] = useState('-25px');
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div id="home-container">
      <div class="mictlan-home">
        {isDesktopOrLaptop && (
          <Row>
            <Col span={8} className="mictlan-home-nav">
              <div class="top-bar">
                <img src={logo} alt="logo" className="mc-logo" />
              </div>
              <div className="topleft">
                <a>
                  <img src={i} alt="" className="iconTop" />
                </a>
                <a>
                  <img src={f} alt="" className="iconTop" />
                </a>
                <a>
                  <img src={t} alt="" className="iconTop" />
                </a>
                <a>
                  <img src={y} alt="" className="iconTop" />
                </a>
                <a>
                  <img src={d} alt="" className="iconTop" />
                </a>
                <a>
                  <img src={p} alt="" className="iconTop" />
                </a>
              </div>
            </Col>
            <Col span={8}>
              <div className="mc-home-bottom">
                <img src={coming} alt="coming" />
                <img src={ps} alt="ps" />
                <img src={xbox} alt="xbox" />
                <img src={unreal} alt="unreal" />
              </div>
              <div className="mc-home-bottom-right">
                <div className="kickstarter">
                  <p>Support our campaign</p>
                  <img src={kickstarter} alt="kickstarter" />
                </div>
                <div className="steam">
                  <img src={steam} alt="steam" />
                  <button>ADD TO STEAM WISHLIST</button>
                </div>
                <div className="meta">
                  <h4>meta</h4>
                  <p>STUDIOS</p>
                </div>
              </div>
            </Col>
          </Row>
        )}
        {isDesktopOrLaptop && (
          <div class="mc-home-1">
            <div class="mc-home-bg">
              <video
                loop="loop"
                preload="auto"
                muted="muted"
                autoplay="autoplay"
                playsinline="true"
                webkit-playsinline="true"
                x-webkit-airplay="true"
                x5-video-player-type="h5-page"
                x5-video-orientation="h5"
                x5-video-player-fullscreen="true"
                x5-video-ignore-metadata="true"
                src={Bg}
                style={{ objectFit: 'cover', opacity: 0.35 }}
              ></video>
            </div>
          </div>
        )}
        {isTabletOrMobile && (
          <div class="mc-home-1">
            <div class="mc-home-bg">
              <video
                loop="loop"
                preload="auto"
                muted="muted"
                autoplay="autoplay"
                playsinline="true"
                webkit-playsinline="true"
                x-webkit-airplay="true"
                x5-video-player-type="h5-page"
                x5-video-orientation="h5"
                x5-video-player-fullscreen="true"
                x5-video-ignore-metadata="true"
                src={Bg}
                style={{ objectFit: 'cover', opacity: 0.35 }}
              ></video>
            </div>
          </div>
        )}

        <div class="mc-home-video">
          <h1 style={{ visibility: 'hidden' }}>An Ancient Mythical Tale </h1>
          <h3 style={{ visibility: 'hidden' }}>NEW WEBSITE COMING NOV 2025</h3>
          <div style={{ position: 'relative', bottom: '1rem' }}>
            <h3>SIGN UP FOR NEWSLETTER </h3>
            <div class="btn_wrap">
              {showSign ? (
                <span onMouseEnter={() => setSign(false)} className="share">
                  Signup
                </span>
              ) : (
                <span
                  onMouseEnter={() => setSign(false)}
                  className="share slider"
                >
                  Signup
                </span>
              )}
              <form
                class="grop-from"
                id="name"
                action="https://futurevizion.us4.list-manage.com/subscribe/post?u=52ca0fb86b335961ba7cef637&amp;id=e6040d35f3"
                method="post"
                name="mc-embedded-subscribe-form"
                novalidate=""
              >
                <div class="form-head">
                  <span class="text"> </span>
                  <i class="icon-placeholder"></i>
                </div>
                <div class="form-body">
                  <span class="error-text">Please Fill Out This Field</span>
                  <div
                    class="form-controls"
                    id="mc_embed_signup_scroll"
                    style={{
                      transitionDelay: '.25s',
                      transform: `translateY(${formTransform})`,
                    }}
                  >
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        name="FNAME"
                        class=""
                        id="mce-FNAME"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        name="EMAIL"
                        class="required email"
                        id="mce-EMAIL"
                      />
                    </div>

                    <div id="mce-responses" class="clear">
                      <div
                        class="response"
                        id="mce-error-response"
                        style={{ display: 'none' }}
                      ></div>
                      <div
                        class="response"
                        id="mce-success-response"
                        style={{ display: 'none' }}
                      ></div>
                    </div>
                    <div
                      style={{ position: 'absolute', left: '-5000px' }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_52ca0fb86b335961ba7cef637_e6040d35f3"
                        tabindex="-1"
                        value=""
                      />
                    </div>
                    <div class="clear" style={{ background: 'black' }}>
                      <input
                        type="submit"
                        onclick="getData()"
                        value="SEND"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        class="button submit_btn"
                      />
                    </div>
                  </div>
                  <a
                    class="form-action"
                    style={{
                      transform: `translateY(${btnTransform})`,
                      transition: '0.5s',
                    }}
                  >
                    <IconButton>
                      <ArrowRightAlt
                        style={{
                          fontSize: '0.4rem',
                          transition: '0.5s',
                          marginBottom: '17px',
                        }}
                        onClick={() => {
                          setTransform('-60px');
                          setBtn('-90px');
                        }}
                      />
                    </IconButton>
                    <IconButton>
                      <ArrowRightAlt
                        style={{ fontSize: '0.4rem', transition: '0.5s' }}
                        onClick={() => {
                          setTransform('-118px');
                          setBtn('-180px');
                        }}
                      />
                    </IconButton>
                  </a>
                </div>
              </form>
              {/* <form
                class="grop-from share"
                action="https://futurevizion.us4.list-manage.com/subscribe/post?u=52ca0fb86b335961ba7cef637&amp;id=e6040d35f3"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                novalidate
              >
                <div class="form-head">
                  <span class="text"> </span>
                  <i class="icon-placeholder"></i>
                </div>
                <div class="form-body">
                  <span class="error-text">Please Fill Out This Field</span>
                  <div class="form-controls" id="mc_embed_signup_scroll">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        name="FNAME"
                        class=""
                        id="mce-FNAME"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        name="EMAIL"
                        class="required email"
                        id="mce-EMAIL"
                      />
                    </div>

                    <div id="mce-responses" class="clear">
                      <div
                        class="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        class="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_52ca0fb86b335961ba7cef637_e6040d35f3"
                        tabindex="-1"
                        value=""
                      />
                    </div>
                    <div class="clear" style={{ background: "black" }}>
                      <input
                        type="submit"
                        onclick="getData()"
                        value="SEND"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        class="button submit_btn"
                      />
                    </div>
                  </div>
                  <a class="form-action">
                    <span class="material-icons" style={{ marginTop: "4.5px" }}>
                      arrow_right_alt
                    </span>
                  </a>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
