import React from "react";
import PropTypes from "prop-types";

function MediaSlide(props) {
    const [media, setMedia] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    const api = props.api;
  
    React.useEffect(() => {
      api.getSlide(props.path).then((data) => {
        console.log(data);
        setMedia(data.data);

        if (!loaded) {
          setLoaded(true);
        }
      });
    }, []);


    if (!loaded) {
      return (
        <div className="loading-screen">
          Loading
        </div>
      );
    }
    
    function buildResource(media) {
        let resourceUrl = media.resource;
        let resource = <div>Resource could not be build</div>;
        if(media.type.includes("image/")) {
            resource = <img src={resourceUrl} className="sizingResource"></img>
        } else if(media.type.includes("video/")) {
            resource = <video autoPlay muted={media.audioEnabled?null:'muted'} className="sizingResource"><source src={resourceUrl + "?t=" + new Date().getTime()} type={props.type} />The browser does not support the video tag.</video>
        }
        return resource;
    }

    return (
        <div className="slideContent">
            <div className="resource">
                { buildResource(media) }
            </div>
        </div>
    );
}

export default MediaSlide