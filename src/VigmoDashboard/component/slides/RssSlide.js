import React from "react";
import PropTypes from "prop-types";

function RssSlide(props) {    
    const [rss, setRss] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    const api = props.api;
  
    React.useEffect(() => {
      api.getSlide(props.path + '/latest').then((data) => {
        setRss(data.data);

        if (!loaded) {
          setLoaded(true);
        }
      });
    }, []);


    if (!loaded) {
      return (
        <div className="loading-screen">
          <div>Loading...</div>
        </div>
      );
    }

    return (
        <div className="slideContent" style={{padding: 0}}>
            <div className="rssjemoeder">
                <h2>{ rss.title }</h2>
                <div className="rssImageWrapper">
                    <img src={rss.image} className="rssImage"></img>
                </div>
                <div className="rssDescriptionWrapper" dangerouslySetInnerHTML={{__html: rss.description}} />
            </div>
        </div>
    );
}

export default RssSlide;