import React, { Component } from "react";
import "./carousel.css";
import tab from "../assets/tab.png";
import tabRight from "../assets/tab_r.png";
import backleft from "../assets/tab_df_l.png";
import backright from "../assets/tab_df_r.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import one from "../assets/bg.mp4";
import two from "../assets/bg-two.png";
import three from "../assets/bg-three.png";
import four from "../assets/bg-four.png";
import five from "../assets/bg-five.png";

export class Carousels extends Component {
  state = {
    active: "VIDEOS",
  };
  onClick = (text) => {
    this.setState({
      active: text,
    });
  };
  render() {
    return (
      <div class="home-news-and-show">
        <div class="home-show">
          <div class="home-show-container">
            <div class="gs-res-preview">
              <div class="show-tab">
                {this.state.active === "VIDEOS" ? (
                  <div class="gs-b1-tab show-tab-item active">
                    <div
                      class="gs-b1-tab-container"
                      onClick={(text) => this.onClick("VIDEOS")}
                    >
                      <div class="tab-bg-l">
                        <div
                          class="tab-bg-l-img active-bg-l"
                          style={{ backgroundImage: `url(${tab})` }}
                        ></div>
                      </div>
                      <div class="tab-bg-r">
                        <div
                          class="tab-bg-r-img active-bg-r"
                          style={{ backgroundImage: `url(${tabRight})` }}
                        ></div>
                      </div>
                      <div class="tab-text">VIDEOS</div>
                    </div>
                  </div>
                ) : (
                  <div class="gs-b1-tab show-tab-item">
                    <div
                      class="gs-b1-tab-container"
                      onClick={(text) => this.onClick("VIDEOS")}
                    >
                      <div class="tab-bg-l">
                        <div
                          class="tab-bg-l-img default-bg-l"
                          style={{ backgroundImage: `url(${backleft})` }}
                        ></div>
                      </div>
                      <div class="tab-bg-r">
                        <div
                          class="tab-bg-r-img default-bg-r"
                          style={{ backgroundImage: `url(${backright})` }}
                        ></div>
                      </div>
                      <div class="tab-text">VIDEOS</div>
                    </div>
                  </div>
                )}
                {this.state.active === "SCREENSHOTS" ? (
                  <div class="gs-b1-tab show-tab-item active">
                    <div
                      class="gs-b1-tab-container"
                      onClick={(text) => this.onClick("SCREENSHOTS")}
                    >
                      <div class="tab-bg-l">
                        <div
                          class="tab-bg-l-img active-bg-l"
                          style={{ backgroundImage: `url(${tab})` }}
                        ></div>
                      </div>
                      <div class="tab-bg-r">
                        <div
                          class="tab-bg-r-img active-bg-r"
                          style={{ backgroundImage: `url(${tabRight})` }}
                        ></div>
                      </div>
                      <div class="tab-text">SCREENSHOTS</div>
                    </div>
                  </div>
                ) : (
                  <div class="gs-b1-tab show-tab-item">
                    <div
                      class="gs-b1-tab-container"
                      onClick={(text) => this.onClick("SCREENSHOTS")}
                    >
                      <div class="tab-bg-l">
                        <div
                          class="tab-bg-l-img default-bg-l"
                          style={{ backgroundImage: `url(${backleft})` }}
                        ></div>
                      </div>
                      <div class="tab-bg-r">
                        <div
                          class="tab-bg-r-img default-bg-r"
                          style={{ backgroundImage: `url(${backright})` }}
                        ></div>
                      </div>
                      <div class="tab-text">SCREENSHOTS</div>
                    </div>
                  </div>
                )}
                {this.state.active === "WALLPAPERS" ? (
                  <div class="gs-b1-tab show-tab-item active">
                    <div
                      class="gs-b1-tab-container"
                      onClick={(text) => this.onClick("WALLPAPERS")}
                    >
                      <div class="tab-bg-l">
                        <div
                          class="tab-bg-l-img active-bg-l"
                          style={{ backgroundImage: `url(${tab})` }}
                        ></div>
                      </div>
                      <div class="tab-bg-r">
                        <div
                          class="tab-bg-r-img active-bg-r"
                          style={{ backgroundImage: `url(${tabRight})` }}
                        ></div>
                      </div>
                      <div class="tab-text">WALLPAPERS</div>
                    </div>
                  </div>
                ) : (
                  <div class="gs-b1-tab show-tab-item">
                    <div
                      class="gs-b1-tab-container"
                      onClick={(text) => this.onClick("WALLPAPERS")}
                    >
                      <div class="tab-bg-l">
                        <div
                          class="tab-bg-l-img default-bg-l"
                          style={{ backgroundImage: `url(${backleft})` }}
                        ></div>
                      </div>
                      <div class="tab-bg-r">
                        <div
                          class="tab-bg-r-img default-bg-r"
                          style={{ backgroundImage: `url(${backright})` }}
                        ></div>
                      </div>
                      <div class="tab-text">WALLPAPERS</div>
                    </div>
                  </div>
                )}
                {this.state.active === "CONCEPT ART" ? (
                  <div class="gs-b1-tab show-tab-item active">
                    <div
                      class="gs-b1-tab-container"
                      onClick={(text) => this.onClick("CONCEPT ART")}
                    >
                      <div class="tab-bg-l">
                        <div
                          class="tab-bg-l-img active-bg-l"
                          style={{ backgroundImage: `url(${tab})` }}
                        ></div>
                      </div>
                      <div class="tab-bg-r">
                        <div
                          class="tab-bg-r-img active-bg-r"
                          style={{ backgroundImage: `url(${tabRight})` }}
                        ></div>
                      </div>
                      <div class="tab-text">CONCEPT ART</div>
                    </div>
                  </div>
                ) : (
                  <div class="gs-b1-tab show-tab-item">
                    <div
                      class="gs-b1-tab-container"
                      onClick={(text) => this.onClick("CONCEPT ART")}
                    >
                      <div class="tab-bg-l">
                        <div
                          class="tab-bg-l-img default-bg-l"
                          style={{ backgroundImage: `url(${backleft})` }}
                        ></div>
                      </div>
                      <div class="tab-bg-r">
                        <div
                          class="tab-bg-r-img default-bg-r"
                          style={{ backgroundImage: `url(${backright})` }}
                        ></div>
                      </div>
                      <div class="tab-text">CONCEPT ART</div>
                    </div>
                  </div>
                )}
              </div>
              {this.state.active === "VIDEOS" ? (
                <Carousel>
                  <div>
                    <video src={one} loop controls style={{ width: "100%" }} />
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div>
                    <img src={two} alt="" />
                    <p className="legend">Legend 2</p>
                  </div>
                  <div>
                    <img src={three} alt="" />
                    <p className="legend">Legend 3</p>
                  </div>
                  <div>
                    <img src={four} alt="" />
                    <p className="legend">Legend 4</p>
                  </div>
                  <div>
                    <img src={five} alt="" />
                    <p className="legend">Legend 5</p>
                  </div>
                </Carousel>
              ) : (
                <Carousel>
                  <div>
                    <video src={one} loop controls style={{ width: "100%" }} />
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div>
                    <img src={two} alt="" />
                    <p className="legend">Legend 2</p>
                  </div>
                  <div>
                    <img src={three} alt="" />
                    <p className="legend">Legend 3</p>
                  </div>
                  <div>
                    <img src={four} alt="" />
                    <p className="legend">Legend 4</p>
                  </div>
                  <div>
                    <img src={five} alt="" />
                    <p className="legend">Legend 5</p>
                  </div>
                </Carousel>
              )}
              {/* <div class="show-screen">
                <img src="/img/Wallpaper/video_cover_2021newyear.jpg" alt="" />
                <div class="play-button"></div>
                <div class="show-control">
                  <div class="show-ctl-right">
                    <div class="show-ctl-button"></div>
                  </div>
                </div>
              </div> */}
              {/* <div class="show-thumbnail">
                <div class="show-thumbnail-item active">
                  <div class="item-active"></div>
                </div>
                <div class="show-thumbnail-item">
                  <div class="item-active"></div>
                </div>
                <div class="show-thumbnail-item">
                  <div class="item-active"></div>
                </div>
                <div class="show-thumbnail-item">
                  <div class="item-active"></div>
                </div>
                <div class="show-thumbnail-item">
                  <div class="item-active"></div>
                </div>
                <div class="show-thumbnail-item">
                  <div class="item-active"></div>
                </div>
                <div
                  class="show-thumbnail-item"
                  style={{
                    width: "368px",
                    backgroundImage: `url("/img/thumbnail/Wallpaper/img_art_wallpaper_10.png")`,
                  }}
                >
                  <div class="item-active"></div>
                </div>
              </div> */}

              <div
                data-v-452999d1=""
                class="gs-image-popup"
                // style="display: none;"
                alt=""
              >
                <div data-v-452999d1="" class="bg-cover"></div>
                <img
                  data-v-452999d1=""
                  class="popup-img"
                  src=""
                  //   style="visibility: hidden;"
                  alt=""
                />
                <img
                  data-v-452999d1=""
                  src="/img/news/btn_esc.png"
                  class="close-btn"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousels;
