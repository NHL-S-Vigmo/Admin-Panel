import React from "react";

import "./SlideShowPanel.css";
import Slideshow from './Slideshow.js'

const SlideShowPanel = (props) => {

  //calculate values for current slideshow...

  const api = props.apiHandler;
  api.getSlideshows().then((data) => console.log(data));
  //console.log();
  return (
    <div className="component-slideshow-panel">
      <div>
        <Slideshow />
      </div>
    </div>
  );
};

export default SlideShowPanel;