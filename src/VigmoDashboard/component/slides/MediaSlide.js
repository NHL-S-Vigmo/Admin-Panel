import React from "react";
import PropTypes from "prop-types";

export default class MediaSlide extends React.Component {
    render() {
        let resourceUrl = process.env.REACT_APP_DATA_URL + "/files/" + this.props.fileKey + "/render";
        let resource;
        if(this.props.type.includes("image/")) {
            resource = <img src={resourceUrl} className="sizingResource"></img>
        } else if(this.props.type.includes("video/")) {
            resource = <video autoPlay muted={this.props.audioEnabled?null:'muted'} className="sizingResource"><source src={resourceUrl + "?t=" + new Date().getTime()} type={this.props.type} />The browser does not support the video tag.</video>
        }
        
        return (
            <div className="slideContent">
                <div className="resource">
                    { resource }
                </div>
            </div>
        );
    }
}
