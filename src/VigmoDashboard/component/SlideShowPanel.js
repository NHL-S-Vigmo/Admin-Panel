import React from "react";
import PropTypes from "prop-types";

import "./SlideShowPanel.css";
import Slideshow from './Slideshow.js'

export default class SlideShowPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-slideshow-panel">
        <div>
            <Slideshow />
        </div>
      </div>
    );
  }
}