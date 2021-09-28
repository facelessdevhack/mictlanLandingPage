import "./App.css";
import Home from "./Home/home";
import ReactPageScroller from "react-page-scroller";
import Second from "./secondSection/second";
import Third from "./third/third";
import Fourth from "./fourth/fourth";
import Fifth from "./fifth/fifth";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div className="App">
      {isDesktopOrLaptop && (
        <>
          <div data-v-c038550a="" class="gs-topbar">
            <div data-v-c038550a="" class="gs-topbar-logo">
              <div data-v-c038550a="" class="gamesci-logo">
                <img
                  data-v-c038550a=""
                  src="https://www.heishenhua.com/img/b1/img_logo_gs.png"
                  alt=""
                />
              </div>
              <div data-v-c038550a="" class="b1-logo">
                <img
                  data-v-c038550a=""
                  src="https://www.heishenhua.com/img/b1/img_logo_bm.png"
                  alt=""
                />
              </div>
            </div>
            <div data-v-c038550a="" class="gs-topbar-follow">
              <div
                data-v-0bf16e85=""
                data-v-c038550a=""
                class="gs-lang-change lang-ctl"
              >
                <img
                  data-v-0bf16e85=""
                  src="https://www.heishenhua.com/img/b1/btn_language_en.png"
                  class="lang-icon"
                  alt=""
                />
              </div>
              <div data-v-c038550a="" class="follow-text en">
                {" "}
                Follow
                <br data-v-c038550a="" />
                us on{" "}
              </div>
              <div
                data-v-c038550a=""
                class="follow-item follow-youtube can-click"
              >
                <img
                  data-v-c038550a=""
                  src="https://www.heishenhua.com/img/b1/btn_contact_youtube.png"
                  class="follow-logo"
                  alt=""
                />
              </div>
              <div
                data-v-c038550a=""
                class="follow-item follow-twitter can-click"
              >
                <img
                  data-v-c038550a=""
                  src="https://www.heishenhua.com/img/b1/btn_contact_twitter.png"
                  class="follow-logo"
                  alt=""
                />
              </div>
            </div>
          </div>
          <ReactPageScroller>
            <div className="section-1">
              <Home />
            </div>
            <div className="section">
              <Second />
            </div>
            <div className="section">
              <Third />
            </div>
            <div className="section">
              <Fourth />
            </div>
            <div className="section">
              <Fifth />
            </div>
          </ReactPageScroller>
        </>
      )}
      {isTabletOrMobile && (
        <>
          {/* <div data-v-c038550a="" class="gs-topbar">
            <div data-v-c038550a="" class="gs-topbar-logo">
              <div data-v-c038550a="" class="gamesci-logo">
                <img
                  data-v-c038550a=""
                  src="https://www.heishenhua.com/img/b1/img_logo_gs.png"
                  alt=""
                />
              </div>
              <div data-v-c038550a="" class="b1-logo">
                <img
                  data-v-c038550a=""
                  src="https://www.heishenhua.com/img/b1/img_logo_bm.png"
                  alt=""
                />
              </div>
            </div>
            <div data-v-c038550a="" class="gs-topbar-follow">
              <div
                data-v-0bf16e85=""
                data-v-c038550a=""
                class="gs-lang-change lang-ctl"
              >
                <img
                  data-v-0bf16e85=""
                  src="https://www.heishenhua.com/img/b1/btn_language_en.png"
                  class="lang-icon"
                  alt=""
                />
              </div>
              <div data-v-c038550a="" class="follow-text en">
                {" "}
                Follow
                <br data-v-c038550a="" />
                us on{" "}
              </div>
              <div
                data-v-c038550a=""
                class="follow-item follow-youtube can-click"
              >
                <img
                  data-v-c038550a=""
                  src="https://www.heishenhua.com/img/b1/btn_contact_youtube.png"
                  class="follow-logo"
                  alt=""
                />
              </div>
              <div
                data-v-c038550a=""
                class="follow-item follow-twitter can-click"
              >
                <img
                  data-v-c038550a=""
                  src="https://www.heishenhua.com/img/b1/btn_contact_twitter.png"
                  class="follow-logo"
                  alt=""
                />
              </div>
            </div>
          </div> */}
          <div className="section-1">
            <Home />
          </div>
          <div className="section">
            <Second />
          </div>
          <div className="section">
            <Third />
          </div>
          <div className="section">
            <Fourth />
          </div>
          <div className="section">
            <Fifth />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
