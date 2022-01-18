import React from "react";
import PropTypes from "prop-types";

export default class TextSlide extends React.Component {
    render() {
        return (
            <div className="slideContent">
                <h1>{ this.props.title }</h1>
                <div style={{ fontSize: this.props.fontSize }}>
                    { this.props.children }
                </div>
            </div>
        );
    }
}
