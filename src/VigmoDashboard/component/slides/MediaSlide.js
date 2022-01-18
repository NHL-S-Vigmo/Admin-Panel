import React from "react";
import PropTypes from "prop-types";

export default class MediaSlide extends React.Component {
    render() {
        let resource;
        if(this.props.type.includes("image/")) {
            resource = <img src={this.props.resource} className="sizingResource"></img>
        } else if(this.props.type.includes("video/")) {
            resource = <video autoPlay className="sizingResource"><source src={this.props.resource} type={this.props.type} />The browser does not support the video tag.</video>
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
