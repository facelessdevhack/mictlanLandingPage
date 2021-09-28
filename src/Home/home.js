import React from "react";
import Bg from "../assets/bg.mp4";
import logo from "../assets/rmlogo.png";
import gameplay from "../assets/gameplay.mp4";
import "./home.css";
import BtnBg from "../assets/btn_df.png";
import { useMediaQuery } from "react-responsive";
import mbBtn from "../assets/mbBtn.png";

function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div id="home-container">
      <div class="mictlan-home">
        {isDesktopOrLaptop && (
          <div class="mictlan-home-nav">
            <div class="top-bar">
              <div class="top-bar-item nav-active"> HOME </div>
              <div class="top-bar-item"> OVERVIEW </div>
              <div class="top-bar-item"> MEDIA </div>
              <div class="top-bar-item"> FAQ </div>
            </div>
          </div>
        )}
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
              style={{ objectFit: "cover" }}
            ></video>
          </div>
        </div>
        <div class="mc-home-video">
          <div class="mc-logo" style={{ backgroundImage: `url(${logo})` }}>
            <div class="home-1-wukong2"></div>
          </div>
          <div class="mc-home-video-title"> Mictlan The Game </div>
          <div class="mc-home-1-video">
            <div class="home-1-video-text home-1-video-title en right show">
              {" "}
              Official Gameplay Cinematics{" "}
            </div>
            <div
              class="home-1-video-container"
              style={{ background: `rgb(0, 0, 0)` }}
            >
              <video
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
                src={gameplay}
              >
                {" "}
                您的浏览器不支持本视频播放，请尝试换一个浏览器或升级到最新版本{" "}
              </video>
              <div class="play-button play-button-fix"></div>
              <div class="show-control">
                <div class="show-ctl-left">
                  <div class="show-ctl-button"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-1-video-slider">
            <div class="slider-container">
              <div class="slider-button"></div>
            </div>
            <div class="slider-container">
              <div class="slider-button"></div>
            </div>
            <div class="slider-container">
              <div class="slider-button active"></div>
            </div>
          </div>
          <div
            data-v-a17996a2=""
            class="gs-video-popup"
            style={{ display: "none" }}
          >
            <div data-v-a17996a2="" class="bg-cover"></div>
            <video
              data-v-a17996a2=""
              controls="controls"
              preload="auto"
              autoplay="autoplay"
              class="popup-video"
              src=""
              style={{ visibility: "hidden" }}
            >
              {" "}
              您的浏览器不支持本视频播放，请尝试换一个浏览器或升级到最新版本{" "}
            </video>
            <img
              data-v-a17996a2=""
              src="https://www.heishenhua.com/img/news/btn_esc.png"
              class="close-btn"
              alt="pic"
            />
          </div>
          <div class="follow-us-btn">
            <div class="gs-b1-button gs-b1-button-black">
              {isDesktopOrLaptop && (
                <div
                  class="gs-b1-button-container"
                  style={{ background: `url(${BtnBg})` }}
                >
                  <div class="gs-b1-button-text">Sign Up</div>
                </div>
              )}
              {isTabletOrMobile && (
                <div
                  class="gs-b1-button-container"
                  style={{ background: `url(${mbBtn})` }}
                >
                  <div class="gs-b1-button-text">Sign Up</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
