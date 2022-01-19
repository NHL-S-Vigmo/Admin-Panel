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
            console.log(slideType);

            // if(slideType == "text_slides") {
            //     return (
            //       <div
            //         className="slide"
            //         key={index}
            //         style={{ backgroundColor: "#0088FE" }}
            //       >
            //         <TextSlide fontSize={fontSizes.large} title="Kerstdinner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare mollis tellus eu gravida. Nullam eu egestas orci, sit amet congue nulla. Nunc elementum tempor erat in imperdiet. Mauris pulvinar massa eget suscipit pulvinar. Praesent fermentum tortor vel nulla congue, sed suscipit erat sodales. Nunc pulvinar vitae eros ac sagittis. Aenean eleifend turpis egestas, lobortis sapien sed, vulputate libero. Aliquam hendrerit ante nec urna elementum tristique. Pellentesque ut purus mattis, tincidunt est in, vulputate magna. Suspendisse ante nibh, tempor quis dui vel, euismod pellentesque magna. Sed porttitor dolor eu nisi ullamcorper, eget mattis dui dapibus. Vestibulum rhoncus, augue mattis imperdiet fringilla, augue est consectetur ex, in ultrices enim justo nec diam. Vivamus auctor id lorem eu commodo. Praesent dignissim ligula sem, eu dictum diam efficitur et. Sed luctus, dui at maximus pretium, diam tortor blandit ligula, id convallis quam sem vel massa. Suspendisse pretium cursus augue vel fringilla. Duis id malesuada orci, sed posuere elit. Integer non rhoncus lacus. Cras quis mollis massa. Fusce interdum libero et magna porta, sit amet imperdiet eros feugiat.</TextSlide>
            //       </div>
            //     );
            // } else if(slideType == "media_slides") {
            //     return (
            //       <div
            //         className="slide"
            //         key={index}
            //         style={{ backgroundColor: "#0088FE" }}
            //       >
            //         <MediaSlide fileKey="4aa1MVwXq8Prrrz5oCXazFLSKNG2Cv1NvRBhohJ18hCJFusFWbLMkakEStRQPoY9" type="video/mp4" audioEnabled={false} />
            //       </div>
            //     );
            // } else if(slideType == "rss_slides") {
            //     return (
            //       <div
            //         className="slide"
            //         key={index}
            //         style={{ backgroundColor: "#0088FE" }}
            //       >
            //         <RssSlide api={api} path={slideObject.path} />
            //       </div>
            //     );
            // }
            const resource = <MediaSlide fileKey="4aa1MVwXq8Prrrz5oCXazFLSKNG2Cv1NvRBhohJ18hCJFusFWbLMkakEStRQPoY9" type="video/mp4" audioEnabled={false} />
            
            if(slideType == "text_slides") {
              resource = <TextSlide fontSize={fontSizes.large} title="Kerstdinner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare mollis tellus eu gravida. Nullam eu egestas orci, sit amet congue nulla. Nunc elementum tempor erat in imperdiet. Mauris pulvinar massa eget suscipit pulvinar. Praesent fermentum tortor vel nulla congue, sed suscipit erat sodales. Nunc pulvinar vitae eros ac sagittis. Aenean eleifend turpis egestas, lobortis sapien sed, vulputate libero. Aliquam hendrerit ante nec urna elementum tristique. Pellentesque ut purus mattis, tincidunt est in, vulputate magna. Suspendisse ante nibh, tempor quis dui vel, euismod pellentesque magna. Sed porttitor dolor eu nisi ullamcorper, eget mattis dui dapibus. Vestibulum rhoncus, augue mattis imperdiet fringilla, augue est consectetur ex, in ultrices enim justo nec diam. Vivamus auctor id lorem eu commodo. Praesent dignissim ligula sem, eu dictum diam efficitur et. Sed luctus, dui at maximus pretium, diam tortor blandit ligula, id convallis quam sem vel massa. Suspendisse pretium cursus augue vel fringilla. Duis id malesuada orci, sed posuere elit. Integer non rhoncus lacus. Cras quis mollis massa. Fusce interdum libero et magna porta, sit amet imperdiet eros feugiat.</TextSlide>
            } else if(slideType == "media_slides") {
              resource = <MediaSlide fileKey="4aa1MVwXq8Prrrz5oCXazFLSKNG2Cv1NvRBhohJ18hCJFusFWbLMkakEStRQPoY9" type="video/mp4" audioEnabled={false} />
            } else if(slideType == "rss_slides") {
              resource = <RssSlide api={api} path={slideObject.path} />
            }
            
            return (
              <div
                className="slide"
                key={index}
                style={{ backgroundColor: "#0088FE" }}
              >
                { resource }
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