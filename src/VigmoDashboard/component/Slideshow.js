import React from "react";

import "./Slideshow.css";
import TextSlide from "./slides/TextSlide";
import { fontSizes } from "../config/font-sizes"

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSliderWrapper">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundColor }}
            >
              <TextSlide fontSize={fontSizes.large} title="Kerstdinner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare mollis tellus eu gravida. Nullam eu egestas orci, sit amet congue nulla. Nunc elementum tempor erat in imperdiet. Mauris pulvinar massa eget suscipit pulvinar. Praesent fermentum tortor vel nulla congue, sed suscipit erat sodales. Nunc pulvinar vitae eros ac sagittis. Aenean eleifend turpis egestas, lobortis sapien sed, vulputate libero. Aliquam hendrerit ante nec urna elementum tristique. Pellentesque ut purus mattis, tincidunt est in, vulputate magna. Suspendisse ante nibh, tempor quis dui vel, euismod pellentesque magna. Sed porttitor dolor eu nisi ullamcorper, eget mattis dui dapibus. Vestibulum rhoncus, augue mattis imperdiet fringilla, augue est consectetur ex, in ultrices enim justo nec diam. Vivamus auctor id lorem eu commodo. Praesent dignissim ligula sem, eu dictum diam efficitur et. Sed luctus, dui at maximus pretium, diam tortor blandit ligula, id convallis quam sem vel massa. Suspendisse pretium cursus augue vel fringilla. Duis id malesuada orci, sed posuere elit. Integer non rhoncus lacus. Cras quis mollis massa. Fusce interdum libero et magna porta, sit amet imperdiet eros feugiat.</TextSlide>
            </div>
          ))}
        </div>
      </div>
      <fieldset className="slideFrame">
        <legend className="slideType">
          Evenement
        </legend>
        <div className="slideshowDots">
          {colors.map((_, idx) => (
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