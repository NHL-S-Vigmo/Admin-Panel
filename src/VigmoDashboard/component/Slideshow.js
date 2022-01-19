import React from "react";

import "./Slideshow.css";
import TextSlide from "./slides/TextSlide";
import MediaSlide from "./slides/MediaSlide";
import RssSlide from "./slides/RssSlide";
import { fontSizes } from "../config/font-sizes"

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500000;

function Slideshow(props) {
  const [index, setIndex] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  //set properties about all slides.
  const [slides, setSlides] = React.useState([]);
  const [currentSlide, setCurrentSlide] = React.useState(null);

  //props related to current slide


  const api = props.apiHandler;
  const currentSlideshow = props.currentSlideshow;


  React.useEffect(() => {
    api.getSlides(currentSlideshow.id).then((data) => {
      console.log(data);
      setSlides(data.data);
    });
  }, []);

  //function to call when the list with slideshows updates.
  React.useEffect(() => {
    if (slides.length == 0) {
      console.log("no slides received yet, aborting slides rendering.")
    }
    else {
      //get the first slideshow and assign it to the properties.
      setCurrentSlide(slides[0]);
    }
  }, [slides]);

  // function to call when the current slideshow changes.
  React.useEffect(() => {
    if (currentSlide == null) {
      console.log("no slide set yet, aborting slide rendering.")

    }
    else {
      console.log("current slide", currentSlide);

      const slideType = currentSlide.path.split('/').filter(i => i);
      //todo: set a timeout to update the currentslide after the duration of this one passes.
      switch (slideType) {
        case "text_slide":

          break;
      }

      if (!loaded) {
        setLoaded(true);
      }
    }
  }, [currentSlide]);


  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function renderNextSlide() {
    let nextSlideId = 0;
    if (currentSlide != null) nextSlideId = slides.indexOf(currentSlide) + 1;

    //check if the slideshow rotation should end here.
    if (slides.length >= nextSlideId) props.onSlideshowCompleted();

    setCurrentSlide(slides[nextSlideId]);
  }


  // effect to run when the slide index changes
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) => {
          if (prevIndex === colors.length - 1) {
            //TODO: Rerender dia's for changes
            return 0;
          } else {
            return prevIndex + 1;
          }
        }),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  if (!loaded) {
    return (
      <div className="loading-screen">
        Loading
      </div>
    );
  }

  return (
    <div className="slideshow">
      <div className="slideshowSliderWrapper">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {slides.map((slideObject, index) => {
            const slideType = slideObject.path.split('/').filter(i => i);
            //todo: set a timeout to update the currentslide after the duration of this one passes.
            switch (slideType) {
              case "text_slide":

                break;
            }

            return (
              <div
                className="slide"
                key={index}
                style={{ backgroundColor: "#0088FE" }}
              >
                <RssSlide></RssSlide>
              </div>
            );
          })}
        </div>
      </div>
      <fieldset className="slideFrame">
        <legend className="slideType">
          {props.title}
        </legend>
        <div className="slideshowDots">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default Slideshow;