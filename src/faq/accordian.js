import React, { PureComponent } from 'react';

class Accordian extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showFaq: false,
    };
  }
  render() {
    const { showFaq } = this.state;
    return (
      <div id="accordion">
        <div id="accordian-item" className="accordion-item">
          <div className="accordion-title" id="accordion-title">
            <h3 style={{ margin: 0 }}>{this.props.title}</h3>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => this.setState({ showFaq: !showFaq })}
            >
              <p style={{ textSize: '1.5rem' }}>+</p>
            </div>
          </div>
          {showFaq ? (
            <div className="accordion-content">{this.props.content}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Accordian;
