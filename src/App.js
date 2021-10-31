import './App.css';
import Home from './Home/home';
import ReactPageScroller from 'react-page-scroller';
import Second from './secondSection/second';
import Third from './third/third';
import Fourth from './fourth/fourth';
import Fifth from './fifth/fifth';
import { useMediaQuery } from 'react-responsive';
import Carousels from './carousel/carousel';
import Sixth from './sixth/sixth';
import Seven from './seven/seven';
import Eight from './eight/eight';
import Faq from './faq/faq';
import Contact from './contact/contact';
import LazyLoad from 'react-lazyload';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <div className="App">
      {isDesktopOrLaptop && (
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
          <ReactPageScroller>
            <LazyLoad>
              <div className="section-1" style={{ zIndex: 90 }}>
                <Home />
              </div>
            </LazyLoad>
            <LazyLoad>
              <div className="section" style={{ zIndex: 90 }}>
                <Second />
              </div>
            </LazyLoad>
            <LazyLoad offset={100}>
              <div className="section" style={{ zIndex: 90 }}>
                <Third />
              </div>
            </LazyLoad>
            <LazyLoad offset={100}>
              <div className="section" style={{ zIndex: 91 }}>
                <Fourth />
              </div>
            </LazyLoad>
            <LazyLoad offset={100}>
              <div className="section" style={{ zIndex: 92 }}>
                <Fifth />
              </div>
            </LazyLoad>
            <LazyLoad offset={100}>
              <div className="section" style={{ zIndex: 93 }}>
                <Sixth />
              </div>
            </LazyLoad>
            <LazyLoad offset={100}>
              <div className="section" style={{ zIndex: 94 }}>
                <Seven />
              </div>
            </LazyLoad>
            <LazyLoad offset={100}>
              <div className="section" style={{ zIndex: 95 }}>
                <Eight />
              </div>
            </LazyLoad>
            <LazyLoad offset={100}>
              <div className="section" style={{ zIndex: 96 }}>
                <Faq />
              </div>
            </LazyLoad>
            <LazyLoad offset={100}>
              <div className="section" style={{ zIndex: 97 }}>
                <Contact />
              </div>
            </LazyLoad>
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
          <LazyLoad>
            <div className="section-1">
              <Home />
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="section">
              <Second />
            </div>
          </LazyLoad>
          <LazyLoad offset={100}>
            <div className="section">
              <Third />
            </div>
          </LazyLoad>
          <LazyLoad offset={100}>
            <div className="section">
              <Fourth />
            </div>
          </LazyLoad>
          <LazyLoad offset={100}>
            <div className="section">
              <Fifth />
            </div>
          </LazyLoad>
          <LazyLoad offset={100}>
            <div className="section">
              <Sixth />
            </div>
          </LazyLoad>
          <LazyLoad offset={100}>
            <div className="section">
              <Seven />
            </div>
          </LazyLoad>
          <LazyLoad offset={100}>
            <div className="section">
              <Eight />
            </div>
          </LazyLoad>
          <LazyLoad offset={100}>
            <div className="section">
              <Faq />
            </div>
          </LazyLoad>
          <LazyLoad offset={100}>
            <div className="section">
              <Contact />
            </div>
          </LazyLoad>
        </>
      )}
    </div>
  );
}

export default App;
