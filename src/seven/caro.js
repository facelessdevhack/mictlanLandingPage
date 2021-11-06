import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player';
import './seven.css';

export class Caro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }
  render() {
    const customRenderItem = (item, props) => (
      <item.type {...item.props} {...props} />
    );

    const getVideoThumb = (videoId) =>
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const getVideoId = (url) =>
      url.substr('https://www.youtube.com/embed/'.length, url.length);

    const YoutubeSlideImg = ({ url, isSelected }) => (
      <img
        src={getVideoThumb(getVideoId(url))}
        alt="video"
        style={{ width: '90%', height: '65%', objectFit: 'cover', zIndex: '0' }}
      />
    );
    const YoutubeSlide = ({ url, isSelected }) => (
      <ReactPlayer
        height="auto"
        width="80%"
        url={url}
        playing={isSelected}
        controls={true}
        style={{
          margin: '0 auto',
          padding: '0.2rem 0',
          zIndex: '100',
        }}
      />
    );
    const YoutubeSlideMob = ({ url, isSelected }) => (
      <ReactPlayer
        height="100%"
        width="100%"
        url={url}
        playing={isSelected}
        controls={true}
        style={{
          margin: '5vh auto',
          padding: '0.2rem 0',
          zIndex: '100',
        }}
      />
    );
    const { mob } = this.props;
    return (
      <>
        {mob === true ? (
          <>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <Carousel
                  renderIndicator={false}
                  style={{ width: '125%', zIndex: '-1' }}
                  renderItem={customRenderItem}
                  showStatus={false}
                >
                  {this.props.data.map((d) => (
                    <YoutubeSlideImg key={d.key} url={d.url} />
                  ))}
                </Carousel>
                <button
                  onClick={() => {
                    this.setState({ isPlaying: !this.state.isPlaying });
                  }}
                  style={{
                    position: 'absolute',
                    top: '25%',
                    left: '45%',
                  }}
                  className="button-play"
                ></button>
              </div>
            </div>
            {this.state.isPlaying ? (
              <div
                style={{
                  position: 'fixed',
                  top: '0',
                  left: '0',
                  background: 'rgba(0,0,0,1)',
                  borderRadius: '1%',
                  width: '100vw',
                  height: '100vh',
                  margin: '0 auto',
                  zIndex: '100',
                }}
              >
                <Carousel
                  renderIndicator={false}
                  renderItem={customRenderItem}
                  showStatus={false}
                  style={{
                    objectFit: 'cover',
                    zIndex: '10',
                  }}
                >
                  {this.props.data.map((d) => (
                    <YoutubeSlideMob key={d.key} url={d.url} />
                  ))}
                </Carousel>
                <button
                  style={{
                    position: 'absolute',
                    top: '0.2rem',
                    right: '0.2rem',
                    fontSize: '0.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                  }}
                  onClick={() => {
                    this.setState({ isPlaying: !this.state.isPlaying });
                  }}
                >
                  x
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <>
            <div>
              <div style={{ position: 'relative' }}>
                {!this.state.isPlaying ? (
                  <Carousel
                    renderIndicator={false}
                    style={{ width: '125%', zIndex: '-1' }}
                    renderItem={customRenderItem}
                    showStatus={false}
                  >
                    {this.props.data.map((d) => (
                      <YoutubeSlideImg key={d.key} url={d.url} />
                    ))}
                  </Carousel>
                ) : null}
                {!this.state.isPlaying ? (
                  <button
                    onClick={() => {
                      this.setState({ isPlaying: !this.state.isPlaying });
                    }}
                    style={{
                      position: 'absolute',
                      top: '25%',
                      left: '45%',
                    }}
                    className="button-play"
                  ></button>
                ) : null}
              </div>
            </div>
            {this.state.isPlaying ? (
              <div
                style={{
                  position: 'absolute',
                  top: '1px',
                  left: '0',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '1%',
                  width: '100vw',
                  height: '100vh',
                  margin: '0 auto',
                  zIndex: '100',
                }}
              >
                <Carousel
                  renderIndicator={false}
                  renderItem={customRenderItem}
                  showStatus={false}
                  style={{
                    objectFit: 'contain',
                    zIndex: '10',
                    padding: '1rem',
                  }}
                >
                  {this.props.data.map((d) => (
                    <YoutubeSlide key={d.key} url={d.url} />
                  ))}
                </Carousel>
                <button
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.6rem',
                    fontSize: '0.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                  }}
                  onClick={() => {
                    this.setState({ isPlaying: !this.state.isPlaying });
                  }}
                >
                  x
                </button>
              </div>
            ) : null}
          </>
        )}
      </>
    );
  }
}

export default Caro;
