import React, { Component } from 'react';
import one from '../assets/concepts/1.png';
import two from '../assets/concepts/2.jpg';
import three from '../assets/concepts/3.jpg';
import four from '../assets/concepts/4.jpg';
import five from '../assets/concepts/5.png';
import six from '../assets/concepts/6.png';
import seven from '../assets/concepts/7.png';
import eight from '../assets/concepts/8.png';
import nine from '../assets/concepts/9.jpg';
import ten from '../assets/concepts/10.jpg';
import eleven from '../assets/concepts/11.png';
import twelve from '../assets/concepts/12.png';
import thirteen from '../assets/concepts/13.png';
import fourteen from '../assets/concepts/14.png';
import fifteen from '../assets/concepts/15.jpg';
import sixteen from '../assets/concepts/16.jpg';
import seventeen from '../assets/concepts/17.jpg';
import eighteen from '../assets/concepts/18.jpg';
import nineteen from '../assets/concepts/19.jpg';
import twenty from '../assets/concepts/20.png';
import twentyone from '../assets/concepts/21.png';
import twentytwo from '../assets/concepts/22.png';
import twentythree from '../assets/concepts/23.png';
import twentyfour from '../assets/concepts/24.jpg';
import twentyfive from '../assets/concepts/25.png';
import twentysix from '../assets/concepts/26.png';
import twentyseven from '../assets/concepts/27.png';
import twentyeight from '../assets/concepts/28.png';
import twentynine from '../assets/concepts/29.png';
import thirty from '../assets/concepts/30.png';
import thirtyone from '../assets/concepts/31.png';
import thirtytwo from '../assets/concepts/32.jpg';
import thirtythree from '../assets/concepts/33.jpg';
import thirtyfour from '../assets/concepts/34.jpeg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class ImgCaro extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    const { show } = this.state;
    const { mob } = this.props;
    return (
      <>
        {mob === true ? (
          <div style={{ position: 'relative' }}>
            <div
              onClick={() =>
                this.setState({
                  show: !this.state.show,
                })
              }
              style={{ cursor: 'pointer' }}
            >
              <img className="caro-img" src={five} alt="four" />
            </div>
            {show ? (
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
                  style={{
                    objectFit: 'contain',
                    zIndex: '10',
                    padding: '1rem',
                  }}
                  showThumbs={false}
                  renderIndicator={false}
                >
                  <img className="caro-img" src={four} alt="four" />
                  <img className="caro-img" src={one} alt="one" />
                  <img className="caro-img" src={two} alt="two" />
                  <img className="caro-img" src={three} alt="three" />
                  <img className="caro-img" src={five} alt="five" />
                  <img className="caro-img" src={six} alt="six" />
                  <img className="caro-img" src={seven} alt="seven" />
                  <img className="caro-img" src={eight} alt="eight" />
                  <img className="caro-img" src={nine} alt="nine" />
                  <img className="caro-img" src={ten} alt="ten" />
                  <img className="caro-img" src={eleven} alt="eleven" />
                  <img className="caro-img" src={twelve} alt="twelve" />
                  <img className="caro-img" src={thirteen} alt="thirteen" />
                  <img className="caro-img" src={fourteen} alt="fourteen" />
                  <img className="caro-img" src={fifteen} alt="fifteen" />
                  <img className="caro-img" src={sixteen} alt="sixteen" />
                  <img className="caro-img" src={seventeen} alt="seventeen" />
                  <img className="caro-img" src={eighteen} alt="eighteen" />
                  <img className="caro-img" src={nineteen} alt="nineteen" />
                  <img className="caro-img" src={twenty} alt="twenty" />
                  <img className="caro-img" src={twentyone} alt="twentyone" />
                  <img className="caro-img" src={twentytwo} alt="twentytwo" />
                  <img
                    className="caro-img"
                    src={twentythree}
                    alt="twentythree"
                  />
                  <img className="caro-img" src={twentyfour} alt="twentyfour" />
                  <img className="caro-img" src={twentyfive} alt="twentyfive" />
                  <img className="caro-img" src={twentysix} alt="twentysix" />
                  <img
                    className="caro-img"
                    src={twentyseven}
                    alt="twentyseven"
                  />
                  <img
                    className="caro-img"
                    src={twentyeight}
                    alt="twentyeight"
                  />
                  <img className="caro-img" src={twentynine} alt="twentynine" />
                  <img className="caro-img" src={thirty} alt="thirty" />
                  <img className="caro-img" src={thirtyone} alt="thirtyone" />
                  <img className="caro-img" src={thirtytwo} alt="thirtytwo" />
                  <img
                    className="caro-img"
                    src={thirtythree}
                    alt="thirtythree"
                  />
                  <img className="caro-img" src={thirtyfour} alt="thirtyfour" />
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
                    this.setState({ show: !this.state.show });
                  }}
                >
                  x
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <div>
            <div
              onClick={() =>
                this.setState({
                  show: !this.state.show,
                })
              }
              style={{ cursor: 'pointer' }}
            >
              <img className="caro-img-dis" src={five} alt="four" />
            </div>
            {show ? (
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
                  style={{
                    objectFit: 'contain',
                    zIndex: '10',
                    padding: '1rem',
                  }}
                  showThumbs={false}
                  renderIndicator={false}
                >
                  <img className="caro-img" src={four} alt="four" />
                  <img className="caro-img" src={one} alt="one" />
                  <img className="caro-img" src={two} alt="two" />
                  <img className="caro-img" src={three} alt="three" />
                  <img className="caro-img" src={five} alt="five" />
                  <img className="caro-img" src={six} alt="six" />
                  <img className="caro-img" src={seven} alt="seven" />
                  <img className="caro-img" src={eight} alt="eight" />
                  <img className="caro-img" src={nine} alt="nine" />
                  <img className="caro-img" src={ten} alt="ten" />
                  <img className="caro-img" src={eleven} alt="eleven" />
                  <img className="caro-img" src={twelve} alt="twelve" />
                  <img className="caro-img" src={thirteen} alt="thirteen" />
                  <img className="caro-img" src={fourteen} alt="fourteen" />
                  <img className="caro-img" src={fifteen} alt="fifteen" />
                  <img className="caro-img" src={sixteen} alt="sixteen" />
                  <img className="caro-img" src={seventeen} alt="seventeen" />
                  <img className="caro-img" src={eighteen} alt="eighteen" />
                  <img className="caro-img" src={nineteen} alt="nineteen" />
                  <img className="caro-img" src={twenty} alt="twenty" />
                  <img className="caro-img" src={twentyone} alt="twentyone" />
                  <img className="caro-img" src={twentytwo} alt="twentytwo" />
                  <img
                    className="caro-img"
                    src={twentythree}
                    alt="twentythree"
                  />
                  <img className="caro-img" src={twentyfour} alt="twentyfour" />
                  <img className="caro-img" src={twentyfive} alt="twentyfive" />
                  <img className="caro-img" src={twentysix} alt="twentysix" />
                  <img
                    className="caro-img"
                    src={twentyseven}
                    alt="twentyseven"
                  />
                  <img
                    className="caro-img"
                    src={twentyeight}
                    alt="twentyeight"
                  />
                  <img className="caro-img" src={twentynine} alt="twentynine" />
                  <img className="caro-img" src={thirty} alt="thirty" />
                  <img className="caro-img" src={thirtyone} alt="thirtyone" />
                  <img className="caro-img" src={thirtytwo} alt="thirtytwo" />
                  <img
                    className="caro-img"
                    src={thirtythree}
                    alt="thirtythree"
                  />
                  <img className="caro-img" src={thirtyfour} alt="thirtyfour" />
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
                    this.setState({ show: !this.state.show });
                  }}
                >
                  x
                </button>
              </div>
            ) : null}
          </div>
        )}
      </>
    );
  }
}

export default ImgCaro;
