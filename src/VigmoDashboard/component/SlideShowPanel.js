import React from "react";

import "./SlideShowPanel.css";
import Slideshow from './Slideshow.js'

const SlideShowPanel = (props) => {
  const [loaded, setLoaded] = React.useState(false);

  //set properties about all slideshows.
  const [slideshows, setSlideshows] = React.useState([]);
  const [currentSlideshow, setCurrentSlideshow] = React.useState(null);

  //set properties for the current slideshow.
  const [slideshowName, setSlideshowName] = React.useState("");

  const api = props.apiHandler;

  //put all the api requests in a useEffect that runs once, this way the api is not spammed upon UI changes.
  React.useEffect(() => {
    api.getSlideshows().then((data) => {
      setSlideshows(data.data);
    });
  }, []);

  //function to call when the list with slideshows updates.
  React.useEffect(() => {
    if (slideshows.length == 0) {
      console.log("no slideshows received yet, aborting slideshow rendering.")
    }
    else {
      //always assign the first slideshow.
      setCurrentSlideshow(slideshows[0]);
      setSlideshowName(slideshows[0].name);
    }
  }, [slideshows]);

  // function to call when the current slideshow changes.
  React.useEffect(() => {
    if (currentSlideshow == null) {
      console.log("no slideshow set yet, aborting slideshow rendering.")
      setLoaded(false);
    }
    else {
      console.log("current slideshow", currentSlideshow);

      setLoaded(true);
    }
  }, [currentSlideshow]);


  //function to execute when a slideshow has done its rotation, this means move on to the next slideshow, if there are any.
  const slideShowCompleted = (id) => {
    console.log("Done with slideshow: ", slideshows[id]);
    setLoaded(false);

    // get the next slideshow and assign it to the properties.
    // let nextSlideId = 0;
    // if (currentSlideshow != null) nextSlideId = slideshows.indexOf(currentSlideshow) + 1;

    // if (slideshows.length >= nextSlideId) nextSlideId = 0; //start again.

    // setCurrentSlideshow(slideshows[nextSlideId]);
    // setSlideshowName(slideshows[nextSlideId].name);
  };

  if (!loaded) {
    return (
      <div className="loading-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="component-slideshow-panel">
      <div>
        <Slideshow title={slideshowName} apiHandler={api} currentSlideshow={currentSlideshow} onSlideshowCompleted={slideShowCompleted} />
      </div>
    </div>
  );
};

export default SlideShowPanel;