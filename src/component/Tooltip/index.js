/* eslint-disable */
import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

class index extends PureComponent {
  state = {
    active: false,
  };

  constructor(props) {
    super(props);

    const id = 'tooltip';
    this.domNode = document.querySelector(`#${id}`);
    if (!this.domNode) {
      this.domNode = document.createElement('div');
      this.domNode.setAttribute('id', id);
      document.body.appendChild(this.domNode);
    }
    this.sourceRef = React.createRef();
  }

  renderTooltip = () => {
    if (!this.state.active) return null;
    const { top, left, width } = this.sourceRef.current.getBoundingClientRect();
    const tooltip = {
      position: 'absolute',
      zIndex: 10,
      bottom: window.innerWidth - top + 50 - window.scrollY,
      left: left + width / 2 + window.scrollX,
    };
    return ReactDom.createPortal(
      <div style={tooltip}>
        <div
          role="tooltip"
          style={{
            position: 'relative',
            left: '-50%',
            padding: '8px 16px',
            borderRadius: 4,
            background: '#424242',
            color: 'white',
          }}
        >
          {this.props.text}
          <span
            style={{
              position: 'absolute',
              bottom: -60,
              left: 'calc(50% - 5px)',
              borderWidth: 5,
              borderStyle: 'solid',
              borderColor: '#424242 transparent transparent transparent',
            }}
          />
        </div>
      </div>,
      this.domNode,
    );
  };

  showTooltip = () => {
    console.log('showTooltip');
    this.setState({ active: true });
  };

  hideTooltip = () => {
    console.log('hideTooltip');
    this.setState({ active: false });
  };

  render() {
    const source = (
      <span
        key={0}
        ref={this.sourceRef}
        tabIndex="0"
        role="button"
        onMouseEnter={this.showTooltip}
        onMouseLeave={this.hideTooltip}
        onFocus={this.showTooltip}
        onBlur={this.hideTooltip}
      >
        {this.props.children}
      </span>
    );
    return [source, this.renderTooltip()];
  }
}

index.propTypes = {};

export default index;
